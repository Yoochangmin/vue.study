- ## :small_airplane: Vue란?

  ----

  -웹 어플리 케이션을 만들들기 위한 라이브러리이자 프레임워크

  - #### 장점

    #### -단일 페이지 어플리케이션(SPA) 개발을 위한 라우터(Router) 라이브러리 사용

    #### -여러 컴포넌트들이 상태를 유지하고 데이터를 공유하기 위한 Vuex 라이브러리 사용

    #### -가상노드 : 

    #### :baby_chick: 디렉티브 :HTML에 사용되는 특별한 기호

    > #### 1. 디렉티브가 정의한 기능 혹은 디렉티브에 연결된 변수의 값에 따라 DOM(Document Object Model) 엘리멘트를 변화
    >
    > #### 2. v-model - 디렉티브는 스크립트 코드의 변수와 양방향으로 바인드되어 실시간으로 DOM 엘리멘트에 변화를 줄 수 있음.

    실시간 바인딩으로 인해 잦은 렌더링을 유발 시킬 수 있고 속도 저하를 유발 하지만 가상노드(VNode)를 생성하고 해당 노드에 먼저 모든 DOM을 구성한 후 브라우저에게 최종 DOM 엘리먼트 변경을 통지함으로 속도 저하를 방지

    ### 

  

  - ##### 용어 설명

    ##### :feet: 동기적(Synchronous)

    > 어떤 작업을 요청했을 때 그 작업이 종료될때 까지 기다린 후 다음 작업을 수행하는 방식

    ##### :feet: 비동기적(Asynchronous)

    > 어떤 작업을 요청했을 때 그 작업이 종료될때 까지 기다리지 않고 다른 작업을 하고 있다가, 요청했던 작업이 종료되면 그에 대한 추가 작업을 수행하는 방식

    ##### :feet: 디렉티브

    >  Vue 엘리먼트에서 사용되는 특별한 속성.
    >
    >  기능상에 있어서 엘리먼트에게 이러이러하게 작동해라는 행동을 지시함 => v-if, v-show

    ###### :feet: 프록시(Proxies)

    > 데이터와 프레임워크 사이에서 **데이터의 전달 및 변환, 관리**를 담당

    ##### :feet: Non-Props

    > 컴포넌트 non-prop 속성은 컴포넌트에 전달되지만, [props](https://v3.ko.vuejs.org/ko-kr/guide/component-props)나 [emits](https://v3.ko.vuejs.org/ko-KR/guide/component-custom-events.html#defining-custom-events)에 정의된 특성을 지니고 있지 않은 속성 또는 이벤트 리스너를 의미합니다. 이에 대한 일반적인 예로 **`class`, `style`, `id`** 속성이 있습니다. 이러한 속성들은 `$attrs` 프로퍼티를 통해 접근할 수 있습니다.

    

  

  - #### Vue 요소

    1. 컴포지션 API(Composition Api)

       > 정의 : Open APi를 기반으로 하나의 객체를 하나의 모듈로 만든 것
       >
       > - 컴포지셔 작성시 함수 기반의 방법으로 작성하는 방법
       >
       >   -가독성이 높고 잘 조직화된 코드를 만들 수 있음

    2. Suspensez

       > 정의 :컴포넌트가 데이터를 받아오기 전까지 기본 컨텐츠를 표시할 수 있는 기능
       >
       > ​	ex) 소셜 네트워크에서 데이터를 불러올 때 로딩의 속도차이를 고려해 스켈레톤이라 불리는 Ui를 띄우고, 데이터 로	딩이 완료되면 실제 화면을 띄우는 것을 들 수 있음.
       >
       > ##### :crescent_moon:  기존에는 v-if, v-show와 같은 디렉티브 이용
       >
       > ##### :moon: Vue3 Suspense는 비동기적 컴포넌트의 로딩이 완료될 때까지 대체 컴포넌트를 그리는 방법
       >
       > > ##### 아직은 개발중인 상태

    3. Teleport

       > DOM 께층을 무시하고 특정 DOM 엘리먼트에 랜더링 할 수 있는 기능
       >
       > 즉 자신이 렌더링하고 싶은 위치가 있다면 Teleport를 사용하여 구현 

    4. v-model 디렉티브

       > v-model 디렉티브는 양뱡항 결합 모델.
       >
       > - 기존의 Vue2에서는 하나의 사용자 컴포넌트가 하나의 v-model 디렉티브를 가지는 것만 허용
       >
       >   > 추가적인 v-model 디렉티브가 필요할 경우 일반적으로 v-bind 디렉티브와 v-on 디렉티브를 함께 이용하고 여러 변수의 양뱡향 결합을 위해 변수를 객체나 배열로 만들어 사용
       >
       > - Vue3는 기본적으로 여러개의 v-model 디렉티브를 하나의 DOM 엘리번트에 할당 가능
       >
       >   ```
       >   두개의 input 태그 이용시
       >   Vue2 
       >   <MyCompo v-bind:param1 v-on:update="updateParam1" v-bind:param2 v-on:update="updateParam2"/>
       >   Vue3
       >   <Mycompo v-model="param1" v-model ="param2"	/>
       >   ```
       >
       >   - ###### 코드의 가독성이 좋아지고 간단함

    5. 프록시(Proxies)로 진화된 반응성

       > Vue는 내부적으로 객체의 속성을 setter와 getter로 변환하여 반응성을 가짐,  미리 정의되지 않은 속성의 추가는 단순 아이템 추가
       >
       > - Vue3는 컴포지션 API를 통해 데이터를 프록시(Proxies)로 변환하여 사용
       >
       > - 프록시를 사용하면 대상 객체는 프록시 객체 내부로 들어가고 프록시의 getter/setter로 관리되어 모든 데이터의 변화에 대해 반응성을 가짐
       >
       >   ```
       >   const obj = reactive({}) // 프록시가 데이터의 변화에 대해 반응함
       >   obj.item1 = 2 //프록시의 getter/setter로 추가
       >   ```

    6. Fagments

       > 정의 : 하나의 컴포넌트가 여러 개의 루트 노드를 가지는 것을 의미.
       >
       > - Vue 2에서도 여러 개의 루트 노드를 컴포넌트에 할당 할 수 있으나 Vue는 컴포넌트에 전달되는 Non-props 속성을 컴포넌트에 정의된 루트 노드에 전달하도록 설계가 되 어 있기에 여러개의 루트 노드를 가지면 어느 노드에 속성을 전달할지 애매해서 버그 발생, 개발자들은 Vue 템플릿을 생성할 때 하나의 <div> 태그를 두고 그 안에 Html을 작성하는 것을 암묵적으로 정함
       >
       > - Vue3에서는 해당 사항 걱정 없이 여러 개의 루트 노드를 가질 수 있음. But :dark_sunglasses:Non-Props 속성의 전달이 필요 할 경우 어느 노드가 전달을 받을 것인지 명확히 설정
       >
       >   ```
       >   <template>
       >   	<header>...</header>
       >   	<main v-bind="$attrs">...</main>
       >   	<footer>...</footer>
       >   </template>
       >   ```

    7. Emits Option

       > $emit()은 하나의 컴포넌트가 부모 컴포넌트에게 이벤트를 전달하기 위해 존재하는 함수
       >
       > - Vue 3에서는 emites를 이용해 전송할 이벤트를 정의
       >
       >   1. 해당 컴포넌트에서 발생하는 이벤트명을 기술하여 컴포넌트에서 사용하는 이벤트들을 한눈에 볼 수 있는 기능
       >   2. 해당 이벤트의 데이터에 대해서 사전에 검증할 수 있는 기능 제공
       >   3. 미리 정의된 이벤트명을 emits 옵션에 선언하지 않을 경우, 같은 이름의 네이티브 이벤트가 존재한다면 해당 이벤트를 호출
       >
       >   ```
       >   <template>
       >   	<button v-on:click="$emit('click', $event)">OK</button>
       >   </template>
       >   export default { emits: [] }
       >   ```

    8. createRenderer

       > - Vue 3가 제공하는 runtime-dom과 runtime-core 패키지는 사용자가 렌더링의 동작을 정의할 수 있게 해주는 createRenderer 함수 제공
       >
       >   > - **createRenderer**: Host 환경의 Node와 Element를 제네릭 인자로 받아 해당 노드와 엘리먼트의 렌더링 동작을 변경할 수 있게 해줌
       >   >
       >   > **즉_렌더링 동작을 변경한다는 것은 Renderer가 가지는 CRUD에 관련된 함수를 재정의 한다는 의미**
       >   >
       >   > createRenderer 함수는 하나의 객체를 인자로 받고, 해당 객체 내에는 개발자가 재정의하고자 하는 함수 선언
       >
       >   ```
       >   const { createApp } = createRenderer({
       >   ...생략
       >   insert: (child, parent, anchor) =>{
       >   엘리멘트 삽입 시 재정의하고 싶은 코드 삽입
       >   }
       >   ...생략
       >   })
       >   ```
       >
       >   