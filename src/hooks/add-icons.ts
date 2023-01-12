import { library } from '@fortawesome/fontawesome-svg-core'
import { faRepeat, faXmark, faSquareRss} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faSteam, faBilibili } from '@fortawesome/free-brands-svg-icons'
import type { IconDefinition, IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

const initIcon = (): void => {
  const osuIcon: IconDefinition = {
    iconName: "osu" as IconName,
    prefix: 'fab' as IconPrefix,
    icon: [
      135.5,
      135.5,
      [],
      'f1de',
      'm 30.770263,84.584387 c -2.339333,0 -4.380047,-0.398187 -6.122102,-1.144781 -1.742055,-0.746601 -3.185473,-1.841609 -4.280474,-3.185483 -1.144797,-1.343873 -1.990938,-2.936611 -2.588214,-4.778218 -0.597278,-1.841604 -0.84614,-3.782755 -0.84614,-5.922999 0,-2.140243 0.298638,-4.131167 0.84614,-5.972771 0.597276,-1.841599 1.443417,-3.484122 2.588214,-4.827986 1.144779,-1.343883 2.588195,-2.438886 4.280474,-3.23525 1.742055,-0.796381 3.782769,-1.194554 6.122102,-1.194554 2.339333,0 4.380029,0.398173 6.122083,1.194554 1.742055,0.796364 3.18549,1.84159 4.380045,3.23525 1.144778,1.343864 1.990919,2.986387 2.588195,4.827986 0.547501,1.841604 0.846139,3.832528 0.846139,5.972771 0,2.140244 -0.298638,4.081395 -0.846139,5.922999 -0.5475,1.841607 -1.393641,3.434345 -2.588195,4.778218 -1.144798,1.343874 -2.588214,2.438882 -4.380045,3.185483 -1.69228,0.796366 -3.78275,1.144781 -6.122083,1.144781 z m 0,-6.022548 c 2.090471,0 3.583663,-0.796369 4.479581,-2.339336 0.895914,-1.542966 1.343862,-3.782756 1.343862,-6.669597 0,-2.886841 -0.447948,-5.126629 -1.343862,-6.669596 -0.895918,-1.542968 -2.38911,-2.33933 -4.479581,-2.33933 -2.040694,0 -3.533886,0.796362 -4.429804,2.33933 -0.895918,1.542967 -1.393658,3.782755 -1.393658,6.669596 0,2.886841 0.447966,5.126631 1.393658,6.669597 0.895918,1.592739 2.38911,2.339336 4.429804,2.339336 z m 25.782456,-7.2171 c -2.090471,-0.597276 -3.732973,-1.493193 -4.877752,-2.637976 -1.194554,-1.194554 -1.742056,-2.936614 -1.742056,-5.275948 0,-2.837059 0.99545,-5.027082 3.036145,-6.669604 2.040713,-1.592726 4.778217,-2.389108 8.312123,-2.389108 a 24.453526,24.453526 0 0 1 8.560969,1.592746 c -0.09952,0.945692 -0.248862,1.990917 -0.5475,3.036162 -0.298639,1.045225 -0.647055,1.941142 -1.045245,2.737525 -0.895915,-0.348416 -1.891367,-0.69683 -2.936612,-0.995471 -1.095001,-0.298638 -2.23978,-0.39819 -3.384577,-0.39819 -1.244312,0 -2.239781,0.199105 -2.93661,0.597278 -0.69681,0.398189 -1.045227,0.995469 -1.045227,1.891384 0,0.79637 0.248864,1.393648 0.746589,1.74206 0.497742,0.348412 1.194553,0.647052 2.140246,0.945688 l 3.185471,0.94569 c 1.045246,0.298639 1.990938,0.647049 2.837077,1.095008 0.846142,0.447957 1.542971,0.94569 2.140249,1.59274 0.597277,0.647049 1.045225,1.393645 1.39364,2.339335 0.348414,0.945689 0.497726,2.090471 0.497726,3.38457 0,1.393647 -0.29864,2.637976 -0.846141,3.83253 a 8.7600671,8.7600671 0 0 1 -2.488642,3.085936 c -1.095021,0.895911 -2.438887,1.542967 -3.981856,2.090471 a 17.420587,17.420587 0 0 1 -5.32572,0.746594 c -0.895915,0 -1.692297,-0.04978 -2.438885,-0.09954 -0.746604,-0.04978 -1.443417,-0.149309 -2.140245,-0.298642 -0.69683,-0.149309 -1.343866,-0.298642 -2.040695,-0.497731 -0.647054,-0.19909 -1.39364,-0.44796 -2.190022,-0.746594 0.04986,-0.995464 0.248862,-2.040699 0.5475,-3.036162 0.298639,-1.045236 0.647053,-2.040699 1.095021,-2.986386 1.24433,0.497731 2.389109,0.846143 3.484113,1.095009 1.095,0.248865 2.239798,0.34841 3.43435,0.34841 0.497726,0 1.095003,-0.04978 1.69228,-0.149326 0.597279,-0.09955 1.194555,-0.248868 1.692281,-0.497732 0.497743,-0.248866 0.945692,-0.547506 1.294106,-0.945691 0.348416,-0.398182 0.547501,-0.895916 0.547501,-1.542965 0,-0.895916 -0.248862,-1.542965 -0.796363,-1.941152 -0.547501,-0.39819 -1.294108,-0.746601 -2.239799,-1.045239 z M 76.113557,55.068932 c 1.34387,-0.199086 2.637976,-0.348414 3.981854,-0.348414 1.29409,0 2.637975,0.09952 3.981838,0.348414 v 15.280344 c 0,1.542967 0.09951,2.787294 0.348414,3.782757 0.248862,0.995462 0.597276,1.791831 1.095,2.339336 0.497747,0.597278 1.144796,0.995462 1.891382,1.244327 0.746615,0.248865 1.642531,0.348412 2.637979,0.348412 1.39366,0 2.538439,-0.14931 3.484126,-0.398185 V 55.068932 c 1.34386,-0.199086 2.63797,-0.348414 3.93206,-0.348414 1.294099,0 2.63798,0.09952 3.98184,0.348414 v 27.773397 c -1.19455,0.39818 -2.787292,0.796367 -4.728417,1.194554 A 32.51677,32.51677 0 0 1 85.122491,84.186192 C 83.380435,83.88755 81.837467,83.240501 80.493589,82.294811 79.149719,81.349127 78.104476,79.905704 77.35789,78.064099 76.561509,76.222493 76.163337,73.733839 76.163337,70.647905 V 55.068932 Z m 32.800503,28.868406 c -0.1991,-1.393651 -0.34842,-2.737521 -0.34842,-4.081399 0,-1.343873 0.0996,-2.73752 0.34842,-4.131166 1.39362,-0.199093 2.73751,-0.348412 4.08136,-0.348412 1.34391,0 2.73752,0.09955 4.13119,0.348412 0.19909,1.393646 0.34839,2.787293 0.34839,4.081393 0,1.393651 -0.0996,2.737521 -0.34839,4.131172 -1.39367,0.199089 -2.78728,0.348407 -4.08141,0.348407 -1.39363,-0.04978 -2.73752,-0.14931 -4.13114,-0.348407 z m -0.1991,-40.166899 c 1.44342,-0.199086 2.88684,-0.348414 4.28046,-0.348414 1.44346,0 2.88686,0.09952 4.38006,0.348414 l -0.5475,27.325434 c -1.2941,0.199094 -2.53843,0.34841 -3.733,0.34841 -1.24433,0 -2.53841,-0.09955 -3.78274,-0.34841 z M 67.733334,0 A 67.733263,67.733263 0 0 0 0,67.733334 67.733263,67.733263 0 0 0 67.733334,135.46667 67.733263,67.733263 0 0 0 135.46667,67.733334 67.733263,67.733263 0 0 0 67.733334,0 Z m 0,7.1945975 A 60.538798,60.538798 0 0 1 128.27207,67.733334 60.538798,60.538798 0 0 1 67.733334,128.27207 60.538798,60.538798 0 0 1 7.1945975,67.733334 60.538798,60.538798 0 0 1 67.733334,7.1945975 Z'
    ]
  }

  library.add(
    faRepeat,
    faXmark,
    faGithub,
    faTwitter,
    faSteam,
    faBilibili,
    faSquareRss,
    osuIcon)
}

export default initIcon