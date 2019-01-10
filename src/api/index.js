import ModelFactory from '../models/ModelFactory.js'

const tag = '[api]'

const request = (model) => {
  return ModelFactory.get(model).list(result=>result)
}

export const career = {
  fetch() {
    return request('WorkExperience')
  }
}

export const social = {
  fetch() {
    return request('SocialExperience')
  }
}

export const skills = {
  fetch() {
    return request('Skills')
  }
}

export const introduction = {
  fetch() {
    return request('Introduce')
  }
}

export const contact = {
  fetch() {
    return request('Contact')
  }
}
