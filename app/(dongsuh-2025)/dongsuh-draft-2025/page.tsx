// import Image from "next/image";
import Link from "next/link";
import '../styles/draft_index.css';

export default function Home() {
  return (
      <main className="draft-list-wrap">
        <div className="content-wrap">

          <div className="notice-banner">
            본 디자인 시안은 세부 콘텐츠 디자인, 인터액션 등이 완료되지 않은 제안용도의 시안 입니다.<br />
            홈 화면 중간의 제품소개 영역을 클릭하면 제품상세보기 화면으로 이동합니다.
          </div>

          <div className="content-block">
            <h3 className='block-title'>디자인 시안 공통 적용 사항</h3>
            <ul>
              <li>
                <span>1. 웹접근성을 고려한 디자인 준칙 적용</span>
              </li>
              <li>
                <span>2. 반응형 구현을 고려한 레이아웃 디자인 </span>
              </li>
              <li>
                <span>3. 부수적인 그래픽 요소를 죄대한 배제하여 Minimal 디자인 트렌드 반영 </span>
              </li>
            </ul>
          </div>

          <div className="content-block">
            <h3 className='block-title'>Type-A</h3>
            <ul>
              <li>
                <span>- 메가 트렌드인 Scroll Action 효과를 적용하여 동서식품 메세지를 강조</span>
              </li>
              <li>
                <span>- Hero영역의 영상은 시즌별로 신규 제작되는 동서식품 CM 비디오를 업데이트하여 적용. <br />
                시즌감을 표현하면서 동서식품 브랜드이미지 강조 효과</span>
              </li>
              <li>
                <span>- 삶의향기 매거진, SNS 콘텐츠 들을 배치하여 동서식품 관련 컨텐츠를 최대한 전달</span>
              </li>
            </ul>
            <div className="link-wrap">
              <Link className='draft-link' href={"dongsuh-draft-2025/draft-a"} target="_blank">디자인시안 (Desktop 버전)</Link>
              <Link className='draft-link' href={"dongsuh-draft-2025/draft-a-mo-frame"} target="_blank">디자인시안 (Mobile 버전)</Link>
            </div>
            
          </div>

          <div className="content-block">
            <h3 className='block-title'>Type-B</h3>
            <ul>
              <li>
                <span>- Hero 영역에 최근 동서식품 CM 영상 3개를 볼 수 있도록 하여 신제품에 대한 주목도를 높이며 시즌감을 표현</span>
              </li>
              <li>
                <span>- 제품, 브랜드 섹션을 우선 배치하여 사용자가 보다 제품과 브랜드에 집중하도록 함</span>
              </li>
            </ul>
            <div className="link-wrap">
              <Link className='draft-link' href={"dongsuh-draft-2025/draft-b"} target="_blank">디자인시안 (Desktop 버전)</Link>
              <Link className='draft-link' href={"dongsuh-draft-2025/draft-b-mo-frame"} target="_blank">디자인시안 (Mobile 버전)</Link>
            </div>
          </div>

        </div>
      </main>
  );
}
