"use client";
import { waLink } from "@/lib/config";

const CLASSES = ["Nursery", "LKG", "UKG", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5"];

export default function AdmissionForm() {
  function onSubmit(e) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const text =
      `Hello! Admission enquiry:\nParent: ${d.get("parent")}\nChild: ${d.get("child")}\nClass: ${d.get("class")}` +
      (d.get("message") ? `\nMessage: ${d.get("message")}` : "");
    window.open(waLink(text), "_blank", "noopener");
  }
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="parent">Parent’s name</label>
        <input id="parent" name="parent" required autoComplete="name" />
      </div>
      <div>
        <label htmlFor="child">Child’s name</label>
        <input id="child" name="child" required />
      </div>
      <div>
        <label htmlFor="class">Class for admission</label>
        <select id="class" name="class">
          {CLASSES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message">Message (optional)</label>
        <textarea id="message" name="message" rows={2} />
      </div>
      <div>
        <button className="btn" type="submit">
          Send on WhatsApp
        </button>
      </div>
    </form>
  );
}
