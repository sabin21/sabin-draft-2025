"use client"

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useEffect } from 'react';



gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function SectorList(){

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = ['section1', 'section2', 'section3','section4', 'section5', 'section6', 'section7']

      sections.forEach((sectionId) => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: `#${sectionId}`,
            start: 'top 50%',
            end: '+=50',
            scrub: 1,
            // markers: true,
            toggleActions: 'play none none reverse'
          }
        })
        .from(`#${sectionId} .img-title .title-row h2` , { y: "120%", duration: 1 })

        timeline
          // .from(`#${sectionId} .reveal-img-wrap`, { backgroundColor: "gray", duration: 1 })
          .from(`#${sectionId} .reveal-img`, { y: "100%", duration: 1 })
          // .from(`#${sectionId} .reveal-img`, { opacity: 0, duration: 1 })
          // .from(`#${sectionId} .img-title h2`, { opacity: 0.2});
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return(
    <div className='page-inner-wrap'>
      
      <div className='page-title-wrap'>
        <h2 className='page-title'>동서식품</h2>
      </div>

      <div className="chip-nav-wrap">
        <ul className='chip-nav'>
          <li className='chip-item'><a href="">동서식품 소개</a></li>
          <li className='chip-item'><a href="">연혁</a></li>
          <li className='chip-item'><a href="">사업현황</a></li>
          <li className='chip-item active'><a href="">부문역량</a></li>
          <li className='chip-item'><a href="">관계사</a></li>
          <li className='chip-item'><a href="">CI</a></li>
          <li className='chip-item'><a href="">오시는 길</a></li>
        </ul>
      </div>

      <div className="page-wrap" ref={containerRef}>

        <section className='container flow-padding grid-col1-2 section-company-sector' id="section1">

          <div className="reveal-img-wrap">
            <span className='solid-color'></span>
            <div className="reveal-img">
              <img src="/dongsuh/img/company/sector_1.jpg" alt="" />
            </div>
            <div className="img-title">
              <span className="title-row">
                <h2>Product</h2>
              </span>
              <span className="title-row">
                <h2>Planning</h2>
              </span>
            </div>
          </div>

          <div className='reveal-text-wrap'>
            <div className="text-inner">
              <span className='point-title'>제품기획</span>
              <h2 className='headline'>동서식품은 새롭습니다.</h2>
              <p className='desc'>
                <span className='strong'>
                  국내 커피 부문 1위, 순수한 우리 기술로 식물성 커피크리머(프리마) 개발, 
                  국내 처음으로 캔커피, 커피믹스 시장 개척, 1회용 티백보리차 개발
                </span>
                동서식품은 언제나 최고의 제품만을 고집하여 생활의 여유와 즐거움을 주는 커피문화, 
                생활문화를 이끌어 왔습니다. 소비자 지향의 선진 마케팅 전략으로 매년 100건 이상 시장조사, 
                분석을 실시하고 이를 바탕으로 소비자가 원하는 맛과 제품 성향을 빠르고 정확하게 진단하여 
                늘 새로운 아이템을 개발하고 있습니다. 새롭게 기획된 시제품은 여러 단계의 제품 테스트와 
                고객확인절차를 거쳐 소비자의 입맛을 만족시키는 완벽한 제품으로 탄생됩니다. 동서식품은 
                제품기획단계에서 생산 판매에 이르기까지 항상 새로운 맛, 새로운 만족을 창조합니다.
              </p>
            </div>
          </div>

        </section>

        <section className='container flow-padding grid-col1-2 section-company-sector' id="section2">

          <div className="reveal-img-wrap">
            <span className='solid-color'></span>
            <div className="reveal-img">
              <img src="/dongsuh/img/company/sector_2.jpg" alt="" />
            </div>
            <div className="img-title">
              <span className="title-row">
                <h2>Research &</h2>
              </span>
              <span className="title-row">
                <h2>Development</h2>
              </span>
            </div>
          </div>

          <div className='reveal-text-wrap'>
            <div className="text-inner">
              <span className='point-title'>연구개발</span>
              <h2 className='headline'>동서식품은 멈추지 않습니다.</h2>
              <p className='desc'>
                맛과 향에 있어서 최고의 노하우를 가진 숙련된 연구원들, 1700여 평의 연구실과 전 생산공정을 
                그대로 축소시켜 시제품을 만들어내는 6백여 평의 파일럿 플랜트 (Pilot Plant)를 갖춘 동서식품 
                기술연구소, 이곳에서 동서식품의 모든 제품들이 만들어집니다.식품안전팀, 커피연구팀, 커피믹스연구팀, 
                음료연구팀, 기술팀, 시리얼ㆍ푸드연구팀, 포장기술팀으로 구성된 동서식품 기술연구소에서는 
                지금 이 순간에도 더 나은 제품을 위한 연구원들의 손길이 멈추지 않고 있습니다.
              </p>
            </div>
          </div>

        </section>

        <section className='container flow-padding grid-col1-2 section-company-sector' id="section3">

          <div className="reveal-img-wrap">
            <span className='solid-color'></span>
            <div className="reveal-img">
              <img src="/dongsuh/img/company/sector_3.jpg" alt="" />
            </div>
            <div className="img-title">
              <span className="title-row">
                <h2>Advanced</h2>
              </span>
              <span className="title-row">
                <h2>equipment</h2>
              </span>
            </div>
          </div>

          <div className='reveal-text-wrap'>
            <div className="text-inner">
              <span className='point-title'>최신설비</span>
              <h2 className='headline'>모든 생산설비의 현대화와 자동화를 실현합니다.</h2>
              <p className='desc'>
                커피와 프리마를 생산하는 부평공장과 창원공장, 캔커피와 포스트, 곡물차, 벌꿀 등을 생산하는 
                진천공장은 초현대식 첨단 자동화 시스템을 바탕으로 대규모 생산기술을 완비하고 있습니다.
                <br />
                다년간 축적된 기술 노하우와 진공농축장비, 초고속 포장설비, 최첨단 생산관리 자동화 시스템을 
                기반으로 원료와 완제품을 완벽하게 관리함으로써 위생적이고 안전한 제품들을 생산하고 있습니다. 
                동서식품은 모든 생산설비의 현대화, 자동화를 실현하여 더욱 신속하고 위생적인 제품으로 앞서가겠습니다.
              </p>
            </div>
          </div>

        </section>

        <section className='container flow-padding grid-col1-2 section-company-sector' id="section4">

          <div className="reveal-img-wrap">
            <span className='solid-color'></span>
            <div className="reveal-img">
              <img src="/dongsuh/img/company/sector_4.jpg" alt="" />
            </div>
            <div className="img-title">
              <span className="title-row">
                <h2>Dedication</h2>
              </span>
            </div>
          </div>

          <div className='reveal-text-wrap'>
            <div className="text-inner">
              <span className='point-title'>직원의 정성</span>
              <h2 className='headline'>동서식품은 작은 것을 소중히 여깁니다.</h2>
              <p className='desc'>
                동서식품이 만들어내는 하나 하나의 제품에는 동서 사람들의 마음이 담겨 있습니다. 
                좋은 제품은 최신의 자동화된 설비만으로 만들어질 수 없습니다. 동서는 직원들의 
                정성어린 눈길과 최선을 다하는 마음 만이 소비자가 만족하는 최고의 제품을 만들어낼 수 있다고 믿습니다.
                <br /><br />
                가족이 안심하고 먹고 마실 수 있는 제품을 만든다는 생각으로 동서 사람들은 자신이 맡은 단계에서 꼼꼼하고
                섬세한 품질 관리에 최선을 다합니다. 제품 기획 단계에서부터 시작된 동서식품 직원들의 정성은 
                매장에서의 제품검사, 품질보증부의 운영과 품질관리, 소비자 보호 활동에까지 이어집니다. 
                동서가 운영하는 고객상담실은 소비자들이 전하는 제안과 불만 사항들을 신속하게 접수하여 
                품질 개선에 반영합니다. 동서 제품에는 소비자의 작은 의견 하나도 소중히 여기는 동서의 정성이 담겨있습니다.
              </p>
            </div>
          </div>

        </section>

        <section className='container flow-padding grid-col1-2 section-company-sector' id="section5">

          <div className="reveal-img-wrap">
            <span className='solid-color'></span>
            <div className="reveal-img">
              <img src="/dongsuh/img/company/sector_5.jpg" alt="" />
            </div>
            <div className="img-title">
              <span className="title-row">
                <h2>Circulation</h2>
              </span>
            </div>
          </div>

          <div className='reveal-text-wrap'>
            <div className="text-inner">
              <span className='point-title'>유통</span>
              <h2 className='headline'>신속ㆍ정확ㆍ안전하게 제품을 전달합니다.</h2>
              <p className='desc'>
                동서식품은 소비자에게 신속ㆍ정확ㆍ안전하게 제품을 전달하기 위하여 물류체계를 일찍부터 
                개선시켜 왔습니다. 1980년대 초에 물류팀을 구성하고 물류 효율화를 추진해 왔으며, 
                이후 물류시스템 전반에 대한 대대적인 혁신작업을 펼쳐 합리적인 재고 보충으로 
                업무효율을 높이고 있습니다. 생산ㆍ판매ㆍ물류의 연계 시스템이 구축되어 있으며, 
                차량관제시스템과 같은 첨단시스템을 물류에 접목시켜 현시점의 물류 흐름을 
                총체적으로 파악할 수 있는 체계를 지속적으로 도입하고 있습니다.
              </p>
            </div>
          </div>

        </section>

        <section className='container flow-padding grid-col1-2 section-company-sector' id="section6">

          <div className="reveal-img-wrap">
            <span className='solid-color'></span>
            <div className="reveal-img">
              <img src="/dongsuh/img/company/sector_6.jpg" alt="" />
            </div>
            <div className="img-title">
              <span className="title-row">
                <h2>Consumer</h2>
              </span>
              <span className="title-row">
                <h2>Services</h2>
              </span>
            </div>
          </div>

          <div className='reveal-text-wrap'>
            <div className="text-inner">
              <span className='point-title'>소비자 서비스</span>
              <h2 className='headline'>동서식품은 향기롭습니다.</h2>
              <p className='desc'>
              가슴이 따뜻한 사람과 만나고 싶다 맥심, 아내는 여자보다 아름답다 프리마, 나를 알아주는 커피가 있다! 
              맥스웰하우스 캔커피 등은 많은 소비자들의 기억에 남는 화제의 광고들입니다. 
              동서의 광고에는 사람들의 따뜻한 이야기와 삶의 향기가 담겨 있습니다.<br /><br />
              2년마다 개최하는 삶의향기 동서문학상 - 1973년 ‘커피를 주제로 한 주부 에세이 모집’이 
              큰 반향을 일으켰고, 1989년 제정한 ‘삶의향기 동서문학상’은 1994년부터 2년마다 한 번씩 개최하고 있습니다. 
              이 행사는 많은 주부들이 참여하여 사회적인 문화행사로 평가받고 있습니다. <br /><br />
              장학사업과 문화, 문학활동 지원 
              - 동서식품은 기업으로서 사회적 책임을 다하기 위해 장학사업과 불우이웃돕기운동, 일선장병 위문활동, 
              문화예술활동, 체육활동 등을 적극 지원하고 있습니다. 
              <br /><br />사보 "삶의향기" - 새로운 커피, 생활 문화를 
              전하는 "삶의향기"는 동서식품을 아끼고 사랑하는 독자와 동서를 연결하는 생활정보지 입니다. 
              그 밖에 커피에 대한 모든 정보를 담은 소책자들을 펴내고 있습니다.
              </p>
            </div>
          </div>

        </section>

        <section className='container flow-padding grid-col1-2 section-company-sector' id="section7">

          <div className="reveal-img-wrap">
            <span className='solid-color'></span>
            <div className="reveal-img">
              <img src="/dongsuh/img/company/sector_7.jpg" alt="" />
            </div>
            <div className="img-title">
              <span className="title-row">
                <h2>Eco Friendlay</h2>
              </span>
            </div>
          </div>

          <div className='reveal-text-wrap'>
            <div className="text-inner">
              <span className='point-title'>환경보존</span>
              <h2 className='headline'>동서식품은 내일을 생각합니다.</h2>
              <p className='desc'>
                날로 심각해져가는 우리의 환경을 지켜나가는 일. 바로 동서식품의 신념입니다. 
                동서는 1993년부터 맑고 깨끗한 물 우리가 지킨다 라는 슬로건 아래 모든 공장에 최첨단 
                자동화 시설을 도입한 자동 폐수 처리장을 설치하였습니다.
                동서식품은 하루에도 수천 톤의 공업용수를 사용하고 있으며, 이에 따른 폐수는 물리, 
                화학, 생물학적 처리를 거쳐서 최종적으로 안전한 수준으로 정화하여 방류합니다. 
                이렇게 방류되는 처리수는 금붕어와 향어 등을 양어할 수 있을 정도로 무해합니다.
                <br /><br />
                또한 동서식품은 대기오염 방지를 위해서도 많은 투자와 관심을 기울이고 있으며, 
                청정연료로의 대체, 자체 공정의 개선 및 설비의 합리적인 재배치 등을 통해 
                대기 오염을 최소한으로 줄이고 있습니다. 산업폐수의 정화부문은 특히 타사의 
                모범이 되어 환경청으로부터 수차에 걸쳐 표창을 받기도 했습니다. 
                환경관리 부문 담당자들의 분임조 활동 또한 활발하여 환경친화적인 
                기업으로서의 위상을 구축해 가고 있습니다.
              </p>
            </div>
          </div>

        </section>

      </div>
    
    </div>
  )
}