export default {
  data: [
    {
      sort: 2,
      company: '스톤인테그리티',
      sub: 'STONE INTEGRITY',
      url: 'https://stoneitgt.com/',
      position: 'Full-Stack WEB Developer',
      period: '2017. 11 - 2018. 11',
      period_num: '1년 1개월',
      description: '웹 애플리케이션 개발 (프론트/백 엔드)',
      project: [
        {
          name: 'STONE Q (문제풀이, 성적관리 시스템)',
          period: '2018. 5 - 2018. 6',
          description: '웹 애플리케이션 개발(팀 2명)',
          works: [
            'Vuex, Vue-Router 등 Vue.js 관련 라이브러리 사용 경험',
            '팀 단위 컴포넌트 개발 경험',
            'REST API URI 디자인 및 구현'
          ],
          skill_stack: [
            'Spring boot', 'Vue.js', 'Sass', 'mybatis', 'oracle', 'gradle', 'Webpack', 'git'
          ]
        },
        {
          name: '국립민속박물관 민속현장조사 관리자(WEB)',
          period: '2018. 2 - 2018. 4',
          description: '웹 애플리케이션 개발(단독)',
          works: [
            'Spring boot를 사용하여 프레임 워크 설계 및 개발',
            '기능의 편리한 사용을 위해 사용자 관점으로 직접 기획, bootstrap 기반 UI 디자인 및 구현',
            'Spring AOP, 트랜잭션, Spring ehcache, Spring Test 등 관련 의존 라이브러리 적용',
            'Spring Security를 커스터마이징하여 적용',
            'C/S 프로그램과 호환하는 api를 디자인 및 구현'
          ],
          skill_stack: [
            'Spring boot', 'Jsp', 'Jstl', 'jQuery', 'Bootstrap', 'Mybatis', 'Oracle',
            'Maven', 'git'
          ]
        },
        {
          name: '국립민속박물관 민속현장조사 사용자(WEB)',
          period: '2017. 11 - 2018. 1',
          description: '웹 애플리케이션 리뉴얼 개발(팀 2명)',
          works: [
            '검색 기능을 검색엔진(Elastic Search)을 통한 검색으로 변경하는 작업 진행',
            'JS 기반 라이브러리 커스터마이징(WEB VR, Echart.js, Google Map, tui.editor, flexsheet.js 등)',
            '웹 접근성, 검색엔진최적화(SEO) 등을 고려하여 HTML구조 재 설계',
            '테스트 엔지니어 경험으로 통합 테스트 진행시 리드(화이트박스 테스팅, 크로스 브라우징)'
          ],
          skill_stack: [
            'Spring MVC', 'Jsp', 'Jstl', 'jQuery', 'Mybatis', 'Oracle', 'Elastic Search',
            'Maven', 'git'
          ]
        }
      ]
    },
    {
      sort: 2,
      company: 'NHN Technology Service',
      sub: '(현)N tech Service',
      url: 'https://www.nts-corp.com/nts/index.nhn',
      position: 'Software Test Engineer',
      period: '2016. 07 - 2016. 08',
      period_num: '2개월',
      description: '글로벌 테스트실/테스트 엔지니어 하계인턴',
      project: [
        {
          name: '웹과 모바일 서비스 테스팅',
          description: '소프트웨어 테스팅',
          works: [
            '네이버에서 실제 서비스되는 웹과 모바일의 테스트를 진행',
            '테스트케이스 작성 및 개발자와 테스터의 협업 경험',
            '테스트 방법론 및 자동화 테스팅 경험'
          ],
          skill_stack: ['WhiteBox testing', 'Cross Browsing']
        }
      ]
    }
  ],
  list() {
      return Promise.resolve(this.data)
  }
}
