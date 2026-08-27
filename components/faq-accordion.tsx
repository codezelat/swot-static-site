"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { Faq } from "@/data/types";

export function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div className="faq-item" key={item.question}>
            <button type="button" onClick={() => setOpen(expanded ? -1 : index)} aria-expanded={expanded}>
              <span>{item.question}</span>{expanded ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            <div className="faq-answer" hidden={!expanded}><p>{item.answer}</p></div>
          </div>
        );
      })}
    </div>
  );
}
