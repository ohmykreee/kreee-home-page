const link = [
  {name:'GitHub', fa:'fa-brands fa-github', url:'https://github.com/ohmykreee'}, 
  {name:'Twitter', fa:'fa-brands fa-twitter', url:'https://twitter.com/kreeejiang'},
  {name:'Bilibili', fa:'fa-brands fa-bilibili', url:'https://space.bilibili.com/361507684'},
  {name:'osu!', fa:'fa-brands fa-osu', url:'https://osu.ppy.sh/users/27746946'},
  {name:'Steam', fa:'fa-brands fa-steam', url:'https://steamcommunity.com/id/kreeejiang'},
]

export function LinkList(linkNum, isMain) {
  let list = []
  if (linkNum !== undefined || linkNum != 0 || linkNum <= link.length) {
    list = link.slice(0, linkNum)
  }
  if (isMain === true) {
    list.push({name:'More', fa:'fa-solid fa-grip', url:'/links', noNewtab: true})
  }
  return list
}