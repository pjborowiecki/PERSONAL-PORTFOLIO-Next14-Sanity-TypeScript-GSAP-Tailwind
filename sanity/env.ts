import { env } from "@/env.mjs"

export const apiVersion = env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-09-18"

export const dataset = assertValue(
  env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
)

export const projectId = assertValue(
  env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
)

export const token = assertValue(
  env.NEXT_PUBLIC_SANITY_TOKEN,
  "Missing environment variable: NEXT_PUBLIC_SANITY_TOKEN"
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
