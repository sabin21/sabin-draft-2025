'use client';

import '../styles/header.css';
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDeviceType } from '../hooks/useMediaQuery';

interface HeaderProps {
  isGhost: boolean;
}
interface MenuItem {
  menuText: string;
  link?: string;
  submenu?: { menuText: string; link: string }[];
}

const menuItems: MenuItem[] = [
  { 
    menuText: "회사소개", link: "/company",
    submenu: [
      { menuText: "동서식품", link: "/company/dongsuh" },
      { menuText: "식품안전센터", link: "/company/food_safety" },
      { menuText: "산업안전보건방침", link: "/company/ohs_policy" }
    ]       
  },
  { 
    menuText: "제품안내", link: "/products",
    submenu: [
      { menuText: "브랜드", link: "/products/brands" },
      { menuText: "제품소개", link: "/products/products_list" }
    ] 
  },
  { 
    menuText: "홍보센터", link: "/mediaCenter",
    submenu: [
      { menuText: "뉴스", link: "/mediaCenter/news_list" },
      { menuText: "이벤트", link: "/mediaCenter/event_list" },
      { menuText: "동서식품 홍보영상", link: "/mediaCenter/prfilm_kor" },
      { menuText: "동영상 레시피", link: "/mediaCenter/recipe_list" },
      { menuText: "TV CF", link: "/mediaCenter/tvcf_list" },
      { menuText: "웹진 삶의향기", link: "/mediaCenter/webzine_main" },
      { menuText: "커피클래스", link: "/mediaCenter/coffeeClass_list" },
      { menuText: "커피테이스트", link: "/mediaCenter/taste" },
      { menuText: "소셜미디어", link: "/mediaCenter/sns" }
    ] 
  },
  { 
    menuText: "사회공헌", link: "/csr",
    submenu: [
      { menuText: "삶의향기 동서문학상", link: "/csr/greeting" },
      { menuText: "맥심커피배 입신최강전", link: "/csr/history" },
      { menuText: "동서커피클래식", link: "/csr/ci" },
      { menuText: "동서식품 장학회", link: "/csr/location" },
      { menuText: "맥심 사랑의 향기", link: "/csr/location" },
      { menuText: "동서식품 꿈의 도서관", link: "/csr/location" }
    ] 
  },
  { 
    menuText: "고객센터", link: "/cs",
    submenu: [
      { menuText: "FAQ", link: "/cs/faq" },
      { menuText: "제품관련문의", link: "/cs/complain" },
      { menuText: "기타 문의", link: "/cs/customer" },
      { menuText: "소비자중심경영", link: "/cs/ccm" },
      { menuText: "고객불만 접수", link: "/cs/process" },
    ] 
  }
];

const AppHeader = ({ isGhost }: HeaderProps) => {

  const [hoveredMenuIndex, setHoveredMenuIndex] = useState<number | null>(null);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const pathname = usePathname();

  const { isDesktop, isMobile } = useDeviceType();

  const handleMouseEnter = (index: number) => {
    setHoveredMenuIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredMenuIndex(null);
    setIsNavHovered(false);
  };

  const handleMouseEnterNav = () => {
    setIsNavHovered(true); 
  };

  return (
    <div className="app-header-wrap">
      <header className={`app-header ${isGhost ? 'bg-transparent ghost' : ''} ${isNavHovered ? 'bg-white' : ''}`}>
        <Link href="/" className="btn-logo"></Link>
        {isDesktop && (
          <ul className="nav-wrap" onMouseEnter={handleMouseEnterNav} >
            {menuItems.map((item, index) => (
              <li
                key={index}
                className=""
                onMouseEnter={() => handleMouseEnter(index)} 
              >
                {item.link ? (
                  <Link href={item.link}>
                    {item.menuText}
                  </Link>
                ) : (
                  <span className="">{item.menuText}</span>
                )}
              </li>
            ))}
          </ul>
        )}

      </header>

      <div
        className={`submenu-wrap ${hoveredMenuIndex !== null ? 'active' : ''}`}
        onMouseEnter={() => setHoveredMenuIndex(hoveredMenuIndex)} 
        onMouseLeave={handleMouseLeave}
      >
         {isDesktop && (
        <ul className="submenu">
          {menuItems.map((item, index) => (
            <li key={index} className={`submenu-item ${hoveredMenuIndex === index ? 'highlight' : ''}`}>
              <ul>
                {item.submenu?.map((subitem, subindex) => (
                  <li key={`${index}-${subindex}`} 
                  className=""
                  >
                    <Link href={subitem.link} 
                    className={`${
                      pathname === subitem.link ? 'submenu-active' : ''
                    }`}>
                      {subitem.menuText}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
         )}
      </div>
    </div>
  );
};

export default AppHeader;