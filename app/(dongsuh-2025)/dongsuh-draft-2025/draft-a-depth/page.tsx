"use client"

import Image from "next/image";
import Link from "next/link";
import "../../styles/draft_a.css";

export default function DraftADepth() {

  return (
    
    <div>
      <main className="main">

        <header className="app-header">
          <div className="inner">
            <div className="logo">
              <img src="/dongsuh_2025/logo_default.png" />
            </div>
            <div className="right-util">
              <img src="/dongsuh_2025/b_header_right.png" />
            </div>
          </div>
        </header>

        <div className="depth-wrap">
          <Link href="/dongsuh-draft-2025/draft-a">
            <Image src="/dongsuh_2025/a_depth_full.png" className="depth-full-img" width={1402} height={2538} alt ={""}/>
          </Link>
        </div>
        
      </main>

      <footer className="footer">
        <img src="/dongsuh_2025/draft_b/footer.png" className="full-img" />
      </footer>
    </div>

  );
}
