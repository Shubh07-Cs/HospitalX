function getTelephoneHref(phone) {
  if (typeof phone !== "string") return null

  const normalized = phone.replace(/[^\d+]/g, "")
  const digitCount = normalized.replace(/\D/g, "").length

  if (!/^\+?\d+$/.test(normalized) || digitCount < 5) return null
  return `tel:${normalized}`
}

export { getTelephoneHref }
