"use client"

import Image from "next/image";
import Link from "next/link";
import "../../styles/draft_b.css";

export default function DraftADepth() {

  return (
    
    <div>
      <main className="main">

        <header className="app-header depth">
          <div className="inner">
            <div className="logo">
              <img src="/dongsuh_2025/logo_default.png" />
            </div>
            <ul className="nav-menu">
              <li className="menu-item">회사소개</li>
              <li className="menu-item">제품안내</li>
              <li className="menu-item">홍보센터</li>
              <li className="menu-item">사회공헌</li>
              <li className="menu-item">고객센터</li>
            </ul>
            <div className="right-util">
              <img src="/dongsuh_2025/b_header_right.png" />
            </div>
          </div>
        </header>

        <div className="depth-wrap">
          <Link href="/dongsuh-draft-2025/draft-b">
            <Image src="/dongsuh_2025/draft_b/depth_full.png" className="depth-full-img" width={1402} height={2078} alt ={""}/>
          </Link>
        </div>
        
      </main>

      <footer className="footer">
        <img src="/dongsuh_2025/draft_b/footer_content.png" className="full-img" />
      </footer>
    </div>

  );
}
