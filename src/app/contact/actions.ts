"use server";

import fs from "fs/promises";
import path from "path";

export type LeadFormState = {
  success: boolean;
  message?: string;
};

export async function submitLead(
  _prevState: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  try {
    const payload = {
      company: (formData.get("company") as string)?.trim(),
      productType: (formData.get("productType") as string)?.trim(),
      deploymentStage: (formData.get("deploymentStage") as string)?.trim(),
      concerns: formData.getAll("concerns").map((entry) => String(entry)),
      timeline: (formData.get("timeline") as string)?.trim(),
      email: (formData.get("email") as string)?.trim(),
      message: (formData.get("message") as string)?.trim(),
      createdAt: new Date().toISOString(),
    };

    const dir = path.join(process.cwd(), "tmp", "leads");
    await fs.mkdir(dir, { recursive: true });
    const targetFile = path.join(dir, "leads.jsonl");
    await fs.appendFile(targetFile, `${JSON.stringify(payload)}\n`, "utf-8");

    return { success: true, message: "리드가 저장되었습니다." };
  } catch (error) {
    console.error("lead save error", error);
    return { success: false, message: "제출 처리 중 문제가 발생했습니다." };
  }
}
