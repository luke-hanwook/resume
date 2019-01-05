import WorkExperience from '../models/WorkExperience.js'
import SocialExperience from '../models/SocialExperience.js'
import Skills from '../models/Skills.js'
import Introduce from '../models/Introduce.js'
import Contact from '../models/Contact.js'

export default {
  'WorkExperience': WorkExperience,
  'SocialExperience': SocialExperience,
  'Skills': Skills,
  'Introduce': Introduce,
  'Contact': Contact,
  
  get(model) {
    return this[model]
  }
}
