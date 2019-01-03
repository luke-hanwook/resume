export default {
  data: [
    {
      sort: 1,
      company: 'NHN Technology Service',
      sub: '(현)N tech Service',
      url: 'https://www.nts-corp.com/nts/index.nhn',
      position: 'Software Test Engineer',
      period: '2016. 07 - 2016. 08',
      period_num: '2',
      description: '하계인턴 (Naver에서 서비스 중인 웹 및 모바일 애플리케이션 테스트)',
      project: [
        {
          name: 'Arcade 서비스 테스팅',
          description: '',
          works: [],
          skill_stack: []
        }
      ]
    },
    {
      sort: 2,
      company: '스톤인테그리티',
      sub: 'STONE INTEGRITY',
      url: 'https://stoneitgt.com/',
      position: 'Full-Stack WEB Developer',
      period: '2017. 11 - 2018. 11',
      period_num: '1, 1',
      description: '웹 애플리케이션 개발 (프론트엔드/백엔드)',
      project: [
        {
          name: '국립민속박물관 민속현장조사 사용자(WEB)',
          period: '2017. 11 - 2018. 1',
          description: '웹 애플리케이션 개발',
          works: [
            '팀 단위 개발 : 외부 디자인(외주) 변경에 따른 웹 사이트 개발(본인 외 1명)',
            'JS 기반(WEB VR, Echart.js, Google Map, tui.editor, flexsheet.js, jsTree 등) 라이브러리 커스터마이징',
            '웹 접근성(Accessibility), 검색엔진최적화(SEO) 등을 고려하여 HTML구조 재 설계',
            '테스트 엔지니어 경험을 살려 통합 테스트 진행시 리드(화이트박스 테스팅, 크로스 브라우징)',
            '검색 기능을 검색엔진(Elastic Search) 검색으로 변경하는 작업 진행'
          ],
          skill_stack: [
            'Spring MVC', 'Jsp', 'Jstl', 'jQuery', 'Mybatis', 'Oracle', 'Elasitc Search',
            'Maven', 'git'
          ]
        },
        {
          name: '국립민속박물관 민속현장조사 관리자(WEB)',
          period: '2018. 2 - 2018. 4',
          description: '웹 애플리케이션 개발',
          works: [
            'Spring boot를 사용하여 프레임 워크 설계 및 개발(단독 프로젝트)',
            '기능의 편리한 사용을 위해 사용자 관점으로 직접 기획, bootstrap 기반 UI 디자인 및 구현',
            'Spring AOP, 트랜잭션, Spring ehcache, Spring Test 등 관련 의존 라이브러리 적용',
            'Spring Security를 커스터마이징하여 적용',
            'C/S 프로그램과 (다량 업로드) 호환하는 api를 디자인 및 구현'
          ],
          skill_stack: [
            'Spring boot', 'Jsp', 'Jstl', 'jQuery', 'Bootstrap', 'Mybatis', 'Oracle',
            'Maven', 'git'
          ]
        },
        {
          name: 'STONE Q (문제풀이, 성적관리 시스템)',
          period: '2018. 5 - 2018. 6',
          description: '웹 애플리케이션 개발',
          works: [
            'Vue.js 학습 및 실무 적용',
            'REST API URI 디자인 및 구현'
          ],
          skill_stack: [
            'Spring boot', 'Vue.js', 'mybatis', 'oracle', 'gradle', 'git'
          ]
        }
      ]
    }
  ],
  list() {
      return Promise.resolve(this.data)
  }
}
