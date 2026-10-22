# BLACKSHEEP 홈페이지

정적 HTML/CSS/JS로 만든 반응형 홈페이지입니다. 호스팅 구독 없이 GitHub Pages에 올려 사용할 수 있습니다.

## 먼저 수정할 내용
- `index.html`의 Instagram 링크 `https://www.instagram.com/blacksheepswag/`를 확인하세요.
- YouTube 링크는 현재 일반 YouTube 주소이므로, 본인 채널/영상 주소로 바꾸세요.
- 사진은 Unsplash 외부 이미지입니다. 실제 공연 사진으로 바꾸려면 사진 파일을 `assets` 폴더에 넣고 CSS의 이미지 주소를 `url("assets/파일명.jpg")`로 변경하세요.
- 연락처 `hello@blacksheep.co.kr`는 실제 사용 가능한 메일 주소인지 확인한 뒤 유지하세요.

## GitHub Pages로 무료 공개하기
1. GitHub 계정에 로그인하고 새 **public repository**를 만듭니다. 예: `blacksheep-homepage`
2. `index.html`, `style.css`, `script.js`, `assets` 폴더를 저장소 최상위에 업로드합니다.
3. 저장소 **Settings → Pages**로 들어갑니다.
4. **Build and deployment**에서 `Deploy from a branch`를 고르고 branch `main`, folder `/(root)`를 선택한 뒤 Save 합니다.
5. 잠시 기다리면 `https://사용자이름.github.io/blacksheep-homepage/` 주소로 접속할 수 있습니다.

## 구매한 도메인 연결
1. GitHub 저장소의 **Settings → Pages → Custom domain**에 `blacksheep.co.kr`을 입력하고 Save 합니다.
2. 도메인을 구매한 업체의 DNS 관리 화면에서 GitHub Pages 공식 문서의 현재 안내에 따라 apex 도메인 A/AAAA 레코드와 `www` CNAME을 설정합니다. 기존 DNS 레코드가 있다면 먼저 확인하고 충돌 레코드를 정리하세요.
3. DNS 전파가 끝난 뒤 GitHub Pages 설정에서 HTTPS가 활성화되는지 확인합니다.
4. `www.blacksheep.co.kr`도 사용할 계획이면 GitHub Pages의 도메인 설정과 DNS를 함께 맞춥니다.

공식 문서: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site
