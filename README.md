# vue-poketmon
## Axios로 데이터 가져오기
```js
data(){
      return {
        poketmon:[],
        filterInput:'',
      }
    },
mounted(){
  axios.get('@/assets/data/poketmon.json')
      .then(res => {
        console.log(res)
        this.poketmon = res.data.poketmon
      })
      .catch(e => {
        this.error.push(e)
      })
}
```
mounted 훅에서 데이터를 가져와서 뿌려줬다
created 훅으로도 적어봤는데 똑같이 잘 동작한다

## Computed filter
```js
computed:{
      filteredList(){
        const value = this.filterInput
        return this.poketmon.filter(function(mon){
          return mon.name.includes(value) || mon.type.includes(value) 
          // = return mon.name.indexOf(value) > -1 || mon.type.indexOf(value) > -1
        })
      }
    }
```
- 인풋으로 들어가는 데이터가 계산되어 나올수 있게 computed에 메소드를 적는다
- poketmon 배열을 filter메소드로 걸러서 반환한다 무엇을? filter의 콜백 함수 부분에서 조건에 맞는 요소를
- includes() 메소드는 문자열이 특정 문자열을 포함하는지 확인하는 메소드 <br>
axios로 api 요청할때 쿼리값으로 넣는 것만 해봐서<br>
받아온 데이터를 필터링 하는건 처음 해봐서 좀 헤맸다..