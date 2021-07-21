<template>
  <div>
     <h1>Welcome to Home1{{title}}!</h1> <!--{{}}: 데이터 바인딩--> 
     <input type="text" v-model="inpu1t" > <!--"value="abc"-->
     <button type ="button" @click="getData">Get</button>
     <button type="button" @click="setDate">Set</button>

     <select class="form-control" v-model="region" @chang="changeRegion" ><!--@change를 통해 선택변경시 알림-->
       <option :key="i" :value="d.v" v-for="(d,i) in options">{{d.t}}</option> <!--value는 v-for을 통해 사용-->
        <!--option배열을 하나씩 돌리면서 d:데이터 i:인덱스-- 바인딩-->
        <!--중요 :(콜론)을 사용하면 즉시 데이터변수에 접근 가능하다 -->
        <!-- 배열 행태를 처리할려면 v-for로 처리-->
     </select>


     <table class="table table-bordered" v-if="tableShow"> <!--v-if조건이 맞으면 엘리멘터를 렌더링한다 v-show도있지만 조건이맞거나 안하거나 렌더링을 함--> 
       <tr :key="i" v-for="(d,i) in options">
         <td>{{d.v}}</td>
         <td>{{d.t}}</td>
       </tr>
     </table>
  </div> 
</template>
 <!--html안에서 value라는 값을 v-moldel로 바인딩-->
 <!--html안에서 이벤트(메소드)를발생시키는 onclick=""은 @click으로 바인딩> -->
<script>
export default {
  data() {
    return {
      title: "개발자의 품격",
      title2: "Seoul",
      input1: "abc",
      options: [
        {v:"S", t:"Seoul"},
        {v:"J", t:"Jejs" },
        {v:"B", t:"Busan"},
      ],
      region: "J",//셀렉트 박수가 Jeju로
      tableShow:false,  //v-if 조건 맞으면 사라짐
    };
  },
  watch:{
    input1(){ //input1데이터가 변경되는 순간을 알수 있음
        console.log(this.input1);  //console에서 데이터가 변경될때마다 컴파일댐
    }
  },
  methods:{  //vue에서는 모든 메소드는 이안에서 정의할 수 있음.
  getData(){    //function1
    alert(this.input1)
   },
  setData(){
     this.input1 ="12345";
    },
    changReoin(){
      alert(this.region)
    },
  },
  beforeCreate(){
    console.log("beforecreated")
  },
  created(){
    console.log("created")
  },
  beforeMount(){

  },
  mounted(){

  },
  beforeUpdate(){

  },
  updated(){

  },
  beforeDestroy(){

  },
  destroyed(){

  },
};


</script>