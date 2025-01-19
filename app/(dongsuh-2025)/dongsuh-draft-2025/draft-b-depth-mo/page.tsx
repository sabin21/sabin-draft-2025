"use client"

import Image from "next/image";

import "../../styles/draft_b_mo.css";

export default function DraftBHome() {
  return (
    <div>
      <main className="main">
        <div className="bg-white">
          <a href="/dongsuh-draft-2025/draft-b-mo">
            <Image src={'/dongsuh_2025/draft_b/b_depth_full_mo.png'} width={390} height={2867} alt=""></Image>
          </a>
        </div>
      </main>
    </div>

  );
}
