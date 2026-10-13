export function Instructor() {
  return (
    <section className="section section-dark instructor" id="instructor" aria-labelledby="inst-h">
      <div className="wrap">
        <h2 id="inst-h" className="sr-only">
          강사 소개
        </h2>
        <div className="inst-hero">
          <div className="inst-portrait">
            <img src="/portrait-sample.svg" alt="홍길동 강사 (채널명)" />
          </div>
          <h3 className="inst-name">
            홍길동 <span>강사</span>
          </h3>
          <p className="inst-lead">
            유튜브 N만 구독 &lsquo;채널명&rsquo;,{"\n"}
            현업 5년 차 엔지니어가 <span className="sig">직접</span> 가르칩니다
          </p>
          <ul className="inst-creds">
            <li>유튜브 &lsquo;채널명&rsquo; N만 구독 채널 운영</li>
            <li>OO교육 · OO아카데미 강사</li>
            <li>OO사 엔지니어 · 대표 경력 한 줄</li>
            <li>공인 자격·인증 한 줄</li>
            <li>저서·대표 활동 한 줄</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
