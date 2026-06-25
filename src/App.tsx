import { useState, useRef } from "react";

interface SignatureData {
  name: string;
  title: string;
  phone: string;
  email: string;
  address1: string;
  address2: string;
  mc: string;
}

const defaultData: SignatureData = {
  name: "KATE WILLIAMS",
  title: "Dispatch",
  phone: "830-538-0085",
  email: "kate.w@major-move.com",
  address1: "2955 Hunters Stream",
  address2: "San Antonio, TX 78230",
  mc: "MC#1695403",
};

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}>
      <path d="M3 3h18a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2z"/>
      <path d="M1 5l11 8 11-8"/>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}>
      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}>
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  );
}

function buildSignatureHtml(data: SignatureData, logoUrl: string): string {
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#2d3748;background:#ffffff;">
  <tr>
    <td style="padding:12px 24px 12px 12px;vertical-align:middle;">
      <img src="${logoUrl}" width="120" height="120" alt="Major Move LLC" style="display:block;width:120px;height:120px;object-fit:contain;" />
    </td>
    <td style="width:1px;background:#c0c0c0;padding:0;" width="1">&nbsp;</td>
    <td style="padding:12px 16px 12px 24px;vertical-align:middle;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr><td style="padding-bottom:2px;"><span style="font-size:20px;font-weight:700;letter-spacing:2px;color:#1a202c;text-transform:uppercase;">${data.name}</span></td></tr>
        <tr><td style="padding-bottom:12px;"><span style="font-size:14px;font-style:italic;color:#718096;">${data.title}</span></td></tr>
        <tr><td style="padding-bottom:7px;font-size:14px;color:#2d3748;">&#128222; ${data.phone}</td></tr>
        <tr><td style="padding-bottom:7px;font-size:14px;color:#2d3748;">&#9993; ${data.email}</td></tr>
        <tr><td style="padding-bottom:7px;font-size:14px;color:#2d3748;">&#128205; ${data.address1}<br/>${data.address2}</td></tr>
        <tr><td style="font-size:14px;color:#2d3748;">&#127760; ${data.mc}</td></tr>
      </table>
    </td>
  </tr>
</table>`;
}

function SignaturePreview({ data }: { data: SignatureData }) {
  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 14, color: "#2d3748", background: "#ffffff", display: "inline-block", border: "1px solid #e2e8f0", borderRadius: 6, padding: "4px" }}>
      <table cellPadding={0} cellSpacing={0} style={{ borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={{ padding: "12px 20px 12px 8px", verticalAlign: "middle" }}>
              <img src="/logo.png" alt="Major Move LLC" style={{ display: "block", width: 120, height: 120, objectFit: "contain" }} />
            </td>
            <td style={{ width: 1, background: "#c0c0c0", padding: 0 }}>&nbsp;</td>
            <td style={{ padding: "12px 12px 12px 20px", verticalAlign: "middle" }}>
              <div style={{ marginBottom: 2 }}>
                <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: 2, color: "#1a202c", textTransform: "uppercase" }}>{data.name || "YOUR NAME"}</span>
              </div>
              <div style={{ marginBottom: 12 }}>
                <span style={{ fontSize: 13, fontStyle: "italic", color: "#718096" }}>{data.title || "Title"}</span>
              </div>
              <div style={{ marginBottom: 7, display: "flex", alignItems: "center", gap: 8 }}><PhoneIcon /><span>{data.phone}</span></div>
              <div style={{ marginBottom: 7, display: "flex", alignItems: "center", gap: 8 }}><EmailIcon /><span>{data.email}</span></div>
              <div style={{ marginBottom: 7, display: "flex", alignItems: "flex-start", gap: 8 }}>
                <div style={{ marginTop: 2, flexShrink: 0 }}><LocationIcon /></div>
                <span>{data.address1}<br />{data.address2}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}><GlobeIcon /><span>{data.mc}</span></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="field">
      <label className="field-label">{label}</label>
      <input className="field-input" value={value} onChange={(e) => onChange(e.target.value)} placeholder={label} />
    </div>
  );
}

export default function App() {
  const [data, setData] = useState<SignatureData>(defaultData);
  const [copied, setCopied] = useState(false);
  const [copiedHtml, setCopiedHtml] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  function update(key: keyof SignatureData) {
    return (value: string) => setData((d) => ({ ...d, [key]: value }));
  }

  async function copySignature() {
    const logoUrl = `${window.location.origin}/logo.png`;
    const html = buildSignatureHtml(data, logoUrl);
    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/html": new Blob([html], { type: "text/html" }),
          "text/plain": new Blob([html], { type: "text/plain" }),
        }),
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const logoUrl2 = `${window.location.origin}/logo.png`;
      navigator.clipboard.writeText(buildSignatureHtml(data, logoUrl2)).then(() => {
        setCopiedHtml(true);
        setTimeout(() => setCopiedHtml(false), 2500);
      });
    }
  }

  function copyHtml() {
    const logoUrl = `${window.location.origin}/logo.png`;
    navigator.clipboard.writeText(buildSignatureHtml(data, logoUrl)).then(() => {
      setCopiedHtml(true);
      setTimeout(() => setCopiedHtml(false), 2500);
    });
  }

  return (
    <div className="app">
      <div className="header">
        <img src="/logo.png" alt="Major Move LLC" className="header-logo" />
        <div>
          <h1 className="header-title">Email Signature Builder</h1>
          <p className="header-sub">Major Move LLC</p>
        </div>
      </div>
      <div className="layout">
        <div className="panel">
          <h2 className="panel-title">Edit Information</h2>
          <div className="fields">
            <Field label="Full Name" value={data.name} onChange={update("name")} />
            <Field label="Job Title" value={data.title} onChange={update("title")} />
            <Field label="Phone Number" value={data.phone} onChange={update("phone")} />
            <Field label="Email Address" value={data.email} onChange={update("email")} />
            <Field label="Address Line 1" value={data.address1} onChange={update("address1")} />
            <Field label="Address Line 2" value={data.address2} onChange={update("address2")} />
            <Field label="MC Number" value={data.mc} onChange={update("mc")} />
          </div>
        </div>
        <div className="preview-area">
          <h2 className="panel-title">Signature Preview</h2>
          <div className="preview-box">
            <div ref={previewRef}><SignaturePreview data={data} /></div>
          </div>
          <div className="actions">
            <button className="btn btn-primary" onClick={copySignature}>{copied ? "✓ Copied!" : "Copy Signature"}</button>
            <button className="btn btn-secondary" onClick={copyHtml}>{copiedHtml ? "✓ HTML Copied!" : "Copy HTML Code"}</button>
          </div>
          <div className="instructions">
            <h3 className="instructions-title">How to use your signature</h3>
            <ol className="instructions-list">
              <li>Click <strong>Copy Signature</strong> above</li>
              <li>Open Gmail, Outlook, or Apple Mail</li>
              <li>Go to <strong>Settings → Signature</strong></li>
              <li>Paste and save</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
