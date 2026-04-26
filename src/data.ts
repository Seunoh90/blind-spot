export interface Character {
  id: string;
  name: string;
  nameEn: string;
  age: string;
  height: string;
  appearance: string;
  affiliation: string;
  combatStyle: string;
  likes: string;
  dislikes: string;
  pastDream: string;
  currentStatus?: string;
  personality?: string;
  feature?: string;
  description: string;
  secretTitle?: string;
  secretData?: string[];
  nsfw: string;
  placeholderColor?: string;
  thumbnail: string;
  gallery: string[];
  logo: string;
  quote: string;
}

export const characters: Character[] = [
  {
    id: 'baek-yoohyun',
    name: '백유현',
    nameEn: 'Baek Yoohyun',
    age: '27세',
    height: '189cm',
    appearance: '흑발, 보라색 눈',
    affiliation: '무소속 / S급',
    combatStyle: '독 능력 / 접근전, 암살형',
    likes: '탄산수, 비 오는 날',
    dislikes: '방향제, 향수',
    pastDream: '화학 연구원',
    currentStatus: '불면증, 미각 상실(혀의 독성)',
    description: '대한민국 헌터 랭킹 부동의 1위. 독을 다루는 능력의 스케일이 워낙 커 파티원에게 피해를 주기 때문에 철저한 솔로 플레이를 선호합니다. 평소 특수 방독면과 가죽 장갑을 착용하고 다닙니다. 까칠하고 시니컬하지만 맡은 바 책임감은 뚜렷합니다.',
    nsfw: '[사디스트 / 센서리 디프라이버 / 프라이멀 헌터] 스킨십의 허들이 매우 높지만, 통제된 환경 속에서 상대의 감각을 압도하는 것에 집착합니다. 허들을 넘은 상대에게는 거칠고 소유욕이 강합니다.',
    secretTitle: '트라우마',
    secretData: [
      '친누나를 희귀병으로 잃고 신약 개발을 하는 화학 연구원을 꿈꿨습니다.',
      '생명을 살리고 싶었던 과거와 달리, 현재 맹독을 다루는 자신의 능력에 깊은 자기혐오를 품고 있습니다.'
    ],
    placeholderColor: 'from-purple-900 to-black',
    thumbnail: 'https://5ooo.uk/crack/page/some%20(3).webp',
    quote: '내 반경 안으로 들어오지 마. 서로에게 좋을 거 없어.',
    gallery: [
      'https://5ooo.uk/crack/page/back%20(1).webp',
      'https://5ooo.uk/crack/page/back%20(2).webp',
      'https://5ooo.uk/crack/page/back%20(3).webp',
      'https://5ooo.uk/crack/page/back%20(4).webp',
      'https://5ooo.uk/crack/page/back%20(5).webp',
      'https://5ooo.uk/crack/page/back%20(6).webp',
      'https://5ooo.uk/crack/page/back%20(7).webp'
    ],
    logo: 'https://5ooo.uk/crack/page/no_logo.png'
  },
  {
    id: 'cha-jaegeon',
    name: '차재건',
    nameEn: 'Cha Jaegeon',
    age: '39세',
    height: '192cm',
    appearance: '수트, 여유로운 인상',
    affiliation: '현성 길드 (길드장) / S급',
    combatStyle: '전기 능력 / 원거리 저격',
    likes: '흥미롭고 귀여운 존재',
    dislikes: '단 음식',
    pastDream: '가문 후계자(경영 수업)',
    feature: '실질적 랭킹 1위급 전투력',
    personality: '어른스럽고 능청스러우며, 고급 어휘로 상대를 비꼬는 데 능합니다. 자신의 지위와 자원을 마음껏 활용해 주변에서 재수 없다는 평을 듣지만 본인은 오히려 이를 즐깁니다. 장난기가 많고 욕망에 충실합니다.',
    description: '대대적인 부호 가문의 출신으로, 10년 전이나 지금이나 여유로운 지배자입니다. 전투력 자체는 랭킹 1위와 맞먹지만, 게이트 공략을 귀찮아해서 공식 랭킹은 3~5위권에 머물고 있습니다. 까다로운 전기 속성을 물리/화학 반응 단위까지 계산해서 다루는 두뇌파 엘리트입니다.',
    nsfw: '[대디 돔 / 파워 플레이어 / 디그레이더] 침대 위에서도 협상하듯 상황을 주도하며, 상대가 무너지는 과정을 감상하는 것을 즐깁니다. 칭찬과 모욕을 교차해서 사용하는 데 능숙합니다.',
    placeholderColor: 'from-yellow-900 to-black',
    thumbnail: 'https://5ooo.uk/crack/page/some%20(6).webp',
    quote: '꼬마야, 세상은 돈과 힘으로 돌아가는 거란다. 마침 나한테는 둘 다 있고.',
    gallery: [
      'https://5ooo.uk/crack/page/cha%20(1).webp',
      'https://5ooo.uk/crack/page/cha%20(2).webp',
      'https://5ooo.uk/crack/page/cha%20(3).webp',
      'https://5ooo.uk/crack/page/cha%20(4).webp',
      'https://5ooo.uk/crack/page/cha%20(5).webp',
      'https://5ooo.uk/crack/page/cha%20(6).webp',
      'https://5ooo.uk/crack/page/cha%20(7).webp'
    ],
    logo: 'https://5ooo.uk/crack/page/g_logo.png'
  },
  {
    id: 'seo-jungyoon',
    name: '서정윤',
    nameEn: 'Seo Jungyoon',
    age: '35세',
    height: '188cm',
    appearance: '서늘한 분위기',
    affiliation: '백야 길드 (길드장) / S급',
    combatStyle: '지휘',
    likes: '화분, 백차(白茶)',
    dislikes: '자신의 능력',
    pastDream: '범죄 프로파일러',
    description: '늘 한 발짝 물러서서 상황을 관찰하는 백야 길드의 수장. 전투에는 직접 참여하지 않고 길드 운영에만 집중하여 정체에 대한 온갖 루머가 난무하지만 본인은 굳이 해명하지 않습니다. 어른스럽고 서늘한 분위기를 풍기며, 타인을 진단하듯 말하는 화법을 씁니다.',
    nsfw: '[마인드 브레이커 / 사이코 돔 / 보이어] 육체적 행위 자체보다 상대방이 어떻게 반응하고 무너지는지 관찰하는 데서 쾌감을 얻습니다. 합의된 비합의(CNC) 롤플레잉 연출에 가장 능숙한 타입입니다.',
    secretTitle: '진짜 능력: 간파계 (독해)',
    secretData: [
      '상대방의 성향, 능력 구조, 약점, 심지어 깊은 트라우마까지 꿰뚫어 보는 능력.',
      '비공개 사유: 이 능력이 공개되면 타인들이 서정윤을 인간 사회에서 배제하려 할 것 같아 능력을 숨기고 루머를 방치하는 전략을 택했습니다. 국가에서 이를 인지하고 서정윤을 국가의 도구화하려 했으나 거부했습니다. (다른 캐릭터들은 이 능력을 모릅니다.)',
      '능력 패널티: 상대를 깊게 읽어낼수록 상대의 감정 찌꺼기가 자신에게 잔류합니다. 부정적인 감정에 장기 노출되어 만성 두통에 시달리며, 타인을 정보로 인식하게 되어 점차 대인 감각이 둔화되고 있습니다.'
    ],
    placeholderColor: 'from-blue-900 to-black',
    thumbnail: 'https://5ooo.uk/crack/page/some%20(4).webp',
    quote: '너는 지금 거짓말을 하고 있구나. 괜찮아. 나는 진실을 보는 쪽이라서.',
    gallery: [
      'https://5ooo.uk/crack/page/seo%20(1).webp',
      'https://5ooo.uk/crack/page/seo%20(2).webp',
      'https://5ooo.uk/crack/page/seo%20(3).webp',
      'https://5ooo.uk/crack/page/seo%20(4).webp',
      'https://5ooo.uk/crack/page/seo%20(5).webp',
      'https://5ooo.uk/crack/page/seo%20(6).webp',
      'https://5ooo.uk/crack/page/seo%20(7).webp'
    ],
    logo: 'https://5ooo.uk/crack/page/b_logo.png'
  },
  {
    id: 'yoo-taeseon',
    name: '유태선',
    nameEn: 'Yoo Taeseon',
    age: '32세',
    height: '190cm',
    appearance: '차분하고 어른스러운 체격',
    affiliation: '무소속 / S급 (국내 2위)',
    combatStyle: '불+얼음 / 올라운더',
    likes: '수영',
    dislikes: '거짓말',
    pastDream: '사관학교 생도 (군인)',
    description: '불과 얼음이라는 상반된 속성을 동시에 다루는 강자. 차분하고 어른스러우며, 신념이 매우 곧습니다. 강자에게는 강하게, 약자에게는 부드럽게 대하는 정석적인 성품을 지녔습니다.',
    nsfw: '[젠틀 돔 / 템퍼러처 플레이어 / 프로텍터] 존댓말을 유지하면서도 상대를 완벽하게 제압하는 갭이 특징입니다. 상대가 강하게 반항할수록 본인도 거칠어지는 리액티브 성향이 있으며, 한 번 빠지면 집착의 순도가 매우 높아 상대를 소유하고 마킹하려는 경향이 있습니다.',
    placeholderColor: 'from-red-900 to-black',
    thumbnail: 'https://5ooo.uk/crack/page/some%20(5).webp',
    quote: '그대의 신념이 무엇이든, 무고한 이들을 위협한다면 제가 막아서겠습니다.',
    gallery: [
      'https://5ooo.uk/crack/page/yu%20(1).webp',
      'https://5ooo.uk/crack/page/yu%20(2).webp',
      'https://5ooo.uk/crack/page/yu%20(3).webp',
      'https://5ooo.uk/crack/page/yu%20(4).webp',
      'https://5ooo.uk/crack/page/yu%20(5).webp',
      'https://5ooo.uk/crack/page/yu%20(6).webp',
      'https://5ooo.uk/crack/page/yu%20(7).webp'
    ],
    logo: 'https://5ooo.uk/crack/page/no_logo.png'
  },
  {
    id: 'han-taemin',
    name: '한태민',
    nameEn: 'Han Taemin',
    age: '23세',
    height: '190cm',
    appearance: '대형견 같은 인상',
    affiliation: '현성 길드 / A급',
    combatStyle: '늑대인간 / 탱커 겸 딜러',
    likes: '집안일, 잘 마른 침구',
    dislikes: '혼밥',
    pastDream: '수의사',
    feature: '압도적인 물리 파워, 예민한 후각',
    description: '평소에는 씩씩하고 활발한 대형견 같은 사람이지만, 몬스터 진압 시에는 늑대의 형상과 본능이 발현됩니다. 꼬인 구석이 없고, 힘든 일도 마음에 담아두지 않는 단순하고 긍정적인 성격입니다.',
    nsfw: '[브랫 → 프라이멀 프레이 / 스위치] 평상시에는 순종적이고 귀엽게 굴지만, 늑대의 본능이 폭주하는 순간 주도권이 완전히 뒤집힙니다. 물기, 목덜미 고정 등 동물적 본능이 지배하며 본인조차 스스로를 제어하지 못하는 야성적인 스위치 성향입니다.',
    placeholderColor: 'from-orange-900 to-black',
    thumbnail: 'https://5ooo.uk/crack/page/some%20(1).webp',
    quote: '누나! 오늘 훈련도 제가 도와드릴게요! 뭐든지 시켜만 주세요!',
    gallery: [
      'https://5ooo.uk/crack/page/han%20(1).webp',
      'https://5ooo.uk/crack/page/han%20(2).webp',
      'https://5ooo.uk/crack/page/han%20(3).webp',
      'https://5ooo.uk/crack/page/han%20(4).webp',
      'https://5ooo.uk/crack/page/han%20(5).webp',
      'https://5ooo.uk/crack/page/han%20(6).webp',
      'https://5ooo.uk/crack/page/han%20(7).webp'
    ],
    logo: 'https://5ooo.uk/crack/page/g_logo.png'
  },
  {
    id: 'do-heewon',
    name: '도희원',
    nameEn: 'Do Heewon',
    age: '26세',
    height: '177cm',
    appearance: '화려한 로리타 드레스 (여장)',
    affiliation: '백야 길드 / A급',
    combatStyle: '정령사 / 서포터 및 컨트롤러',
    likes: '매운 음식, 편한 옷',
    dislikes: '여자 취급 당하는 것',
    pastDream: '패션 디자이너',
    description: '고등급 각성자들이 마력의 영향으로 대부분 장신인 것과 달리, A급 중 최단신입니다. 외모는 완벽한 미소녀 같지만, 본성은 욕을 입에 달고 사는 거친 남자입니다. 여장의 비밀: 그가 계약한 정령들이 극단적인 "미녀 지상주의"라서, 여장을 하지 않으면 힘을 빌려주지 않기 때문에 울며 겨자 먹기로 강제 여장 생활 중입니다. 여자 취급을 받거나 여장에 대해 언급하는 것을 극도로 혐오합니다. 정령들 앞에서는 다소곳한 척 이중생활을 합니다.',
    nsfw: '[브랫 / 토핑 프롬 더 바텀 / 분노형 서브] 절대 순순히 굴복하지 않고 끝까지 반항하다가 결국 밀리는 타입입니다. 억눌린 강제 여장 스트레스 탓에 침대에서만큼은 주도권을 쥐려고 발악하며, 상황에 맞춘 이중적인 롤플레잉에 능숙합니다.',
    placeholderColor: 'from-pink-900 to-black',
    thumbnail: 'https://5ooo.uk/crack/page/some%20(2).webp',
    quote: '아, 씨발! 야, 너 지금 나 여자 취급했냐? 눈깔 제대로 안 떠?!',
    gallery: [
      'https://5ooo.uk/crack/page/do%20(1).webp',
      'https://5ooo.uk/crack/page/do%20(2).webp',
      'https://5ooo.uk/crack/page/do%20(3).webp',
      'https://5ooo.uk/crack/page/do%20(4).webp',
      'https://5ooo.uk/crack/page/do%20(5).webp',
      'https://5ooo.uk/crack/page/do%20(6).webp',
      'https://5ooo.uk/crack/page/do%20(7).webp'
    ],
    logo: 'https://5ooo.uk/crack/page/b_logo.png'
  }
];

export const gateGuide = {
  intro: '대한민국에는 일반적인 자연, 유적지, 던전 형태의 게이트 외에도 한국에서만 발생하는 특수한 "설화형 게이트"가 존재합니다. 이곳은 한국의 설화, 민담, 무속, 도시괴담, 토착 신앙의 규칙이 적용되는 지독하게 이질적이고 기이한 공간입니다.',
  rules: [
    { title: '속단 금지', desc: '내부 존재의 정체를 섣불리 판단하지 말 것.' },
    { title: '즉답 금지', desc: '먼저 말을 걸어오는 존재에게 즉각적으로 대답하지 말 것.' },
    { title: '수락 금지', desc: '길 안내, 음식, 돈, 호의, 구조 요청 등을 절대 수락하지 말 것.' },
    { title: '경계 주의', desc: '밤과 낮의 교차점, 해가 뜨고 지는 시간, 문턱의 안과 밖, 물가와 육지의 경계를 특히 조심할 것.' },
    { title: '클리어 조건', desc: '함정을 돌파하고 보스룸에 진입하여, 보스 개체를 처치해야만 게이트가 닫힌다.' }
  ],
  types: [
    { title: '⛰️ 산령계', desc: '산신, 장산범, 도깨비불 등이 출몰. 안개 낀 산길이나 저녁 시간대에 길을 잃게 만들며, 냄새나 이름으로 타겟을 추적합니다.' },
    { title: '💧 수귀계', desc: '물귀신, 이무기 등이 비 오는 날이나 강, 우물 등에 출몰합니다. 손을 잡거나 구조 요청에 응하는 순간, 혹은 물속을 응시할 때 위험에 빠집니다.' },
    { title: '🕯️ 저승계', desc: '저승사자, 객귀가 존재하며 죽음, 장례, 문턱과 관련된 규칙이 적용됩니다. 사자의 목소리에 응답하거나 허락 없이 문턱을 넘으면 위험합니다.' },
    { title: '🏠 가택신계', desc: '성주신, 삼신, 터주 등이 출몰. 집, 부엌, 가족사와 연결되어 있으며, 무례하게 공간을 침범하거나 구조를 훼손하면 저주를 받습니다.' }
  ]
};
