export default {
  data: [
    {
      title: '가톨릭대학교 컴퓨터정보공학부 컴퓨터공학 전공',
      period: '2013 - 2016',
      description:
        `전공 관련 기초부터 심화까지 60학점을 이수하였고 우수한 성적으로 졸업하였습니다.
        컴퓨터 프로그래밍, 자료구조, 소프트웨어 공학, 운영체제, 네트워크, 데이터마이닝 등
        모든 전공 수업을 성실히 수강하였습니다.`
    }
  ],
  list() {
      return Promise.resolve(this.data)
  }
}
