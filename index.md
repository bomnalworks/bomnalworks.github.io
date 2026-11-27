---
layout: home
title: 작은 사업체의 업무 시스템과 0원 홈페이지
hero:
  name: 봄날웍스
  text: 작게 만들고,<br>숫자 그대로 적습니다.
  tagline: 직접 하실 분께는 과정을 담은 책을, 맡기실 분께는 묵묵한 손을 내어 드립니다.
  image:
    light: /logo/symbol.svg
    dark: /logo/symbol-ivory.svg
    alt: 봄날웍스 곰
  actions:
    - theme: brand
      text: 직접 해 보기 · 책
      link: /books
    - theme: alt
      text: 맡기기 · 손
      link: /work
---

<!-- 브랜드 기준: bomnal/brand/BRAND.md - 첫 화면은 "직접 할까(책), 맡길까(손)" 두 갈래 -->

<section id="what" class="home-section">

## 어떻게 도와드릴까요

<p class="lead">직접 해 보실지, 맡기실지 고르시면 됩니다.</p>

<div class="paths">
  <div class="path">
    <span class="path-tag">책 · 직접 하실 분</span>
    <h3>0원부터 따라 하는 과정 기록</h3>
    <p>제가 직접 해 본 순서를 걸린 시간·든 비용·막힌 곳까지 그대로 적었습니다.</p>
    <ul>
      <li>홈페이지 빌더 1년 <span class="big-num">19만 원 → 0원</span>, 1~7장 실습 3시간 안쪽</li>
      <li>코드 한 줄 안 쓰고 AI 채팅과 GitHub 화면만으로</li>
      <li>어르신 색칠공부 도안처럼 바로 인쇄해 쓰는 자료도</li>
    </ul>
    <a class="path-go" href="/books">책 보기</a>
  </div>
  <div class="path alt">
    <span class="path-tag">손 · 맡기실 분</span>
    <h3>반복하던 일을 작은 시스템으로</h3>
    <p>수발주·정산·고객 관리처럼 회사마다 다른 일을 웹 시스템으로 옮기고, 오픈 뒤에도 계속 관리합니다.</p>
    <ul>
      <li>범위를 글로 먼저 정하고, 정한 만큼만 만듭니다</li>
      <li>검수용 주소에서 직접 눌러 보며 확인합니다</li>
      <li>오픈 뒤 한 달 하자보수, 이후 유지보수 계약</li>
    </ul>
    <a class="path-go" href="/work">맡기는 방법 보기</a>
  </div>
</div>

<div class="home-play">
  <p><strong>놀이 · 쉬어 가실 분</strong> — 설치 없이 바로 하는 추억의 게임과 2027 토정비결. 생년월일은 서버로 보내지 않습니다.</p>
  <a href="https://play.bomnalworks.com/">봄날 운세 오락실 →</a>
</div>

</section>

<section class="home-section">

## 최근 기록

<p class="lead">0원에서 시작한 기록입니다. 안 된 시도도 안 됐다고 적습니다.</p>

<PostList :limit="3" />

</section>

<section id="contact" class="home-section">

## 문의

<div class="home-contact">

메일로 연락해 주세요. 평일 저녁과 주말에 답장드립니다.

<!-- 누르면 제목과 적을 거리가 채워진 채 열린다 - 받는 쪽에서 문의 메일을 알아보기 쉽게. 스팸함 문제의 본 해결은 Gmail 필터("스팸함으로 보내지 않음")다 -->
<a href="mailto:contact@bomnalworks.com?subject=%5B%EB%B4%84%EB%82%A0%EC%9B%8D%EC%8A%A4%20%EB%AC%B8%EC%9D%98%5D%20&body=%ED%95%98%EC%8B%9C%EB%8A%94%20%EC%9D%BC%28%EC%97%85%EC%A2%85%29%3A%0D%0A%EC%A7%80%EA%B8%88%20%EB%B6%88%ED%8E%B8%ED%95%9C%20%EC%A0%90%3A%0D%0A%EC%9B%90%ED%95%98%EC%8B%9C%EB%8A%94%20%EC%9D%BC%EC%A0%95%3A%0D%0A%EC%97%B0%EB%9D%BD%EB%B0%9B%EC%9D%84%20%EB%B0%A9%EB%B2%95%3A%0D%0A">contact@bomnalworks.com</a>

<p class="contact-tip">메일 앱이 열리지 않으면 위 주소로 직접 보내 주세요. 제목에 <strong>[봄날웍스 문의]</strong>를 붙여 주시면 놓치지 않고 확인합니다.</p>

</div>

</section>
