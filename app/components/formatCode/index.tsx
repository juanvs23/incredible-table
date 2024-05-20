export default function FormatCode({ code }: { code: string }) {
  return <span className="block text-left">{code.padStart(5, "0")}</span>;
}
