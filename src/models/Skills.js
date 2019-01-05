export default {
  data: [
    {
      title: 'Main Language',
      description: [
        {
          name: 'Java',
          level: 'middle',
          description: [
            'Spring Framework를 이용한 프로젝트에 실무경험이 있습니다.(설계, 개발, 배포)',
            'Java관련 Document들을 분석하는데 어렵지 않고, 참조하여 개발을 진행할 수 있습니다.',
            'Java언어를 통해 객체지향적인 프로그래밍을 적용할 수 있습니다.(상속, 캡슐화, 다형성)',
            '상황에 맞게 적절한 자료구조(컬렉션 프레임워크)를 사용합니다.'
          ]
        },
        {
          name: 'Java Script',
          level: 'middle',
          description: [
            '자바스크립트만의 특징을 이해하며 개발에 적용할 수 있습니다.(함수, 프로토타입, 클로저)',
            '각종 JS 라이브러리 사용 시 Document를 읽고 분석하여 커스터마이징이 가능합니다.',
            'JQuery에 아주 익숙하지만 Vanilla JS로의 구현도 가능합니다.',
            '모던 프론트엔드 개발을 지향합니다.(ES6와 vue.js의 실무 개발경험이 있습니다.)'
          ]
        }
      ]
    },
    {
      title: 'Others',
      description: [
        {
          name: 'HTML/CSS',
          level: 'middle',
          description: [
            'HTML과 CSS의 표준 가이드라인을 준수합니다.',
            '웹 페이지의 Search Engine Optimization의 실무 경험이 있습니다.',
            '반응형 웹과 크로스 브라우징을 적용한 실무 경험이 있습니다.'
          ]
        },
        {
          name: 'DB',
          level: 'middle',
          description: [
            'Oracle 및 MySql의 쿼리문법에 익숙합니다.',
            'Spring과 myBatis를 이용한 DB연동에 익숙합니다.',
            'DB 설계 및 정규화 경험이 있습니다.'
          ]
        },
        {
          name: 'git',
          level: 'middle',
          description: [
            'git을 이용한 다수의 프로젝트 경험이 있습니다.',
            'branch와 merge의 개념을 알고 실제 프로젝트에 적절히 활용합니다.',
            'sorcetree와 같은 tool을 이용함은 물론 cli로도 git을 사용합니다.'
          ]
        },
        {
          name: 'others',
          level: 'low',
          description: [
            'LINUX: 자주 쓰이는 명령어외에 Document를 참조하여 활용할 수 있습니다.',
            'ELASTIC SEARCH: Document를 참조하여 실제 운영중인 웹 서비스에 검색엔진을 적용한 경험이 있습니다.'
          ]
        }
      ]
    },
    {
      title: 'Communication',
      description: [
        {
          name: '',
          level: '',
          description: [
            '타 부서 혹은 직원간 서로의 업무에 대해 존중하며, 협력하여 좋은 결과를 이끌어 낼 수 있도록 노력합니다.',
          ]
        },
        {
          name: '',
          level: '',
          description: [
              '의견의 차이를 줄이는 것이야 말로 업무의 효율성을 높이는 방법이라 생각합니다. 서로 다른 의견을 이해하며 하나의 의견으로 모으기 위해 노력합니다.',
          ]
        },
        {
          name: '',
          level: '',
          description: [
            '피드백 받는 것에 대해 거리낌이 없습니다. 진심어린 피드백은 최고의 성장 비타민이라 생각합니다.'
          ]
        }
      ]
    }
  ],
  list() {
      return Promise.resolve(this.data)
  }
}
