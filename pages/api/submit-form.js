import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const WEBHOOK_URL = process.env.WEBHOOK_URL;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { form_type, data } = req.body;

  if (!form_type || !data) {
    return res.status(400).json({ error: "Missing form_type or data" });
  }

  // 1. Save to Supabase
  const { error: dbError } = await supabase
    .from("form_submissions")
    .insert({ form_type, data });

  if (dbError) {
    console.error("[Supabase error]", dbError.message);
    // Continue to webhook even if DB write fails
  }

  // 2. Forward to Make / n8n webhook → Google Sheets
  if (WEBHOOK_URL) {
    const webhookUrl = WEBHOOK_URL;
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form_type,
          submitted_at: new Date().toISOString(),
          ...data,
        }),
      });
    } catch (err) {
      console.error("[Webhook error]", err.message);
    }
  }

  return res.status(200).json({ success: true });
}
