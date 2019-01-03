export default {
  data: `현재 1년차 주니어 개발자로 커리어를 쌓아가고 있습니다.
  웹 개발에 전반적인 지식이 있으며, 최근 들어 프론트 엔드 개발에 특별히 흥미가 있습니다.
  저는 테스트 엔지니어, 웹 기획, 프론트와 백 엔드 개발 등 실무에서 다양한 경험을 하였고,
  좋은 개발자로서의 성장을 항상 고민하고 있습니다.
  모든 직원이 상호적으로 공유하는 인터렉티브한 환경에서 일하고 싶습니다.
  제게 관심이 있으시다면 연락주세요. 감사합니다.`,

  list() {
      return Promise.resolve(this.data)
  }
}