/**
 * Formats the current date and time in the Rome timezone.
 *
 * @param {Date} now - The date to format, defaults to the current date and time.
 * @returns {string} The formatted date and time string, including the timezone offset.
 */
export const getFormattedDatetime = (now: Date = new Date()): string => {
  const romeTimeZone: string = "Europe/Rome";

  const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat("en-GB", {
    timeZone: romeTimeZone,
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const parts: Intl.DateTimeFormatPart[] = formatter.formatToParts(now);
  const formattedDate: string = `${parts[0].value} ${parts[2].value} ${parts[4].value} at ${parts[6].value}:${parts[8].value}`;

  // Get timezone offset
  const offsetFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat(
    "en-GB",
    {
      timeZone: romeTimeZone,
      timeZoneName: "shortOffset",
    },
  );
  const offsetParts: Intl.DateTimeFormatPart[] =
    offsetFormatter.formatToParts(now);
  const offsetPart: Intl.DateTimeFormatPart | undefined = offsetParts.find(
    (part) => part.type === "timeZoneName",
  );
  const offset: string = offsetPart ? `(${offsetPart.value})` : "";

  return `${formattedDate} ${offset}`;
};
