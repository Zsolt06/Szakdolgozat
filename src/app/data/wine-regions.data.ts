export interface WineRegion {
  id: string;
  name: string;
  description: string;
  famousWines: string[];
  topWineries: string[];
}

export interface WineRegionGroup {
  id: string;
  name: string;
  description: string;
  regions: WineRegion[];
}

export const WINE_REGION_GROUPS: WineRegionGroup[] = [
  {
    id: 'balatoni',
    name: 'Balatoni borrégió',
    description:
      'A Balatoni borrégió a Balaton körüli borvidékeket fogja össze, ahol a tó közelsége, a változatos domborzat és a vulkanikus talajok különleges borászati adottságokat teremtenek. A régió elsősorban fehérborairól ismert, de a déli parton vörösborok és pezsgők is jelentős szerepet kapnak. A táj turisztikai vonzereje miatt a borturizmus is kiemelkedő jelentőségű.',
    regions: [
      {
        id: 'badacsony',
        name: 'Badacsonyi borvidék',
        description:
          'A Badacsonyi borvidék a Balaton északi partjának egyik legismertebb borvidéke, amely különleges bazaltos talajáról híres. A vulkanikus eredetű hegyek ásványos, karakteres fehérborokat adnak. A borvidék egyik különlegessége a Kéknyelű, amely szorosan kötődik Badacsonyhoz. A térség egyszerre fontos bortermelő és turisztikai célpont.',
        famousWines: ['Kéknyelű', 'Olaszrizling', 'Szürkebarát'],
        topWineries: ['Istvándy Birtok', 'Málik Pince','Laposa Birtok']
      },
      {
        id: 'balatonboglar',
        name: 'Balatonboglári borvidék',
        description:
          'A Balatonboglári borvidék a Balaton déli partján helyezkedik el, ahol a löszös talaj és a tó kiegyenlítő hatása kedvez a szőlőtermesztésnek. A borvidék sokszínű, hiszen fehérborok, vörösborok és pezsgők is készülnek itt. A könnyedebb, gyümölcsös stílusok mellett komolyabb tételek is megjelennek. A térség a balatoni borturizmus egyik fontos része.',
        famousWines: ['Irsai Olivér', 'Chardonnay', 'Merlot'],
        topWineries: ['Légli Ottó Pincészete', 'Garamvári Szőlőbirtok', 'Konyári Pincészet']
      },
      {
        id: 'balaton-felvidek',
        name: 'Balaton-felvidéki borvidék',
        description:
          'A Balaton-felvidéki borvidék változatos táji és talajtani adottságokkal rendelkezik, amelyeket a vulkanikus tanúhegyek és a Balaton közelsége formál. A borok gyakran frissek, ásványosak és elegáns savszerkezetűek. A régióban a fehér szőlőfajták dominálnak, de egyre több izgalmas vörösbor is készül. A borvidék hangulata szorosan kapcsolódik a Balaton-felvidék kulturális és természeti értékeihez.',
        famousWines: ['Olaszrizling', 'Rizlingszilváni', 'Szürkebarát'],
        topWineries: ['Villa Tolnay', 'Gilvesy Pincészet', 'Dobosi Birtokközpont']
      },
      {
        id: 'balatonfured-csopak',
        name: 'Balatonfüred-Csopaki borvidék',
        description:
          'A Balatonfüred-Csopaki borvidék az Olaszrizling egyik legismertebb hazai termőhelye. A Balaton közelsége mérsékli az időjárást, míg a mészköves és márgás talajok elegáns, savhangsúlyos borokat eredményeznek. A borvidék borai gyakran frissek, harmonikusak és jól érlelhetők. Balatonfüred és Csopak neve a magyar borkultúrában régóta kiemelt szerepet tölt be.',
        famousWines: ['Olaszrizling', 'Rajnai rizling', 'Chardonnay'],
        topWineries: ['Jásdi Pince', 'Figula Pincészet', 'Szent Donát Birtok']
      },
      {
        id: 'nagy-somlo',
        name: 'Nagy-Somlói borvidék',
        description:
          'A Nagy-Somlói borvidék Magyarország egyik legkisebb, mégis legismertebb történelmi borvidéke. A Somló vulkanikus talaja rendkívül karakteres, ásványos fehérborokat ad. A borvidék legismertebb fajtája a Juhfark, amelyet gyakran a somlói identitás egyik szimbólumának tartanak. A somlói borok általában markáns savúak, hosszú életűek és egyedi karakterűek.',
        famousWines: ['Juhfark', 'Furmint', 'Hárslevelű'],
        topWineries: ['Kreinbacher Birtok', 'Tornai Pincészet', 'Kolonics Pincészet']
      },
      {
        id: 'zala',
        name: 'Zalai borvidék',
        description:
          'A Zalai borvidék Magyarország nyugati részén található, hűvösebb és csapadékosabb klímával. A terület adottságai elsősorban friss, illatos és savakban gazdag fehérborok készítésének kedveznek. A borvidék kevésbé ismert, de természetközeli hangulata és családi pincészetei miatt izgalmas felfedeznivalót kínál. A zalai borok gyakran könnyedek, gyümölcsösek és jó ivásúak.',
        famousWines: ['Olaszrizling', 'Rajnai rizling', 'Zöld veltelini'],
        topWineries: ['Bussay Pince', 'Bezerics Borház', 'Cezar Winery']
      }
    ]
  },
  {
    id: 'duna',
    name: 'Duna borrégió',
    description:
      'A Duna borrégió az Alföld nagy kiterjedésű borvidékeit fogja össze. A térség melegebb, napfényesebb klímája kedvez a könnyed, gyümölcsös borok készítésének. A régióban jelentős mennyiségű szőlőt termesztenek, ezért fontos szerepe van a magyar borászat egészében. A borok stílusa sokszínű, a friss fehérboroktól a kadarkán át a vörösborokig.',
    regions: [
      {
        id: 'csongrad',
        name: 'Csongrádi borvidék',
        description:
          'A Csongrádi borvidék az Alföld déli részén található, meleg, napfényes klímával. A homokos és löszös talajokon könnyedebb, jól iható borok készülnek. A borvidék hagyományosan fehér- és vörösborokat is ad, de a gyümölcsös, közérthető stílusok különösen jellemzőek. A térség borászata a helyi hagyományokra és a mindennapi borfogyasztás kultúrájára épül.',
        famousWines: ['Kadarka', 'Kékfrankos', 'Olaszrizling'],
        topWineries: ['Gulyás Ferenc Pincészete', 'Vass Borászat', 'Koch Borászat Csongrádi Területei']
      },
      {
        id: 'hajos-baja',
        name: 'Hajós-Bajai borvidék',
        description:
          'A Hajós-Bajai borvidék a Duna mentén található, és különösen ismert pincefalvairól, amelyek fontos kulturális értéket képviselnek. A borvidéken a löszös talaj és a meleg klíma kedvez a vörösboroknak és a fűszeresebb fajtáknak. A Kadarka és a Kékfrankos hagyományosan fontos szerepet játszik a térségben. A borvidék családias hangulatú pincészetei a borturizmus szempontjából is vonzóak.',
        famousWines: ['Kadarka', 'Kékfrankos', 'Cabernet Sauvignon'],
        topWineries: ['Koch Borászat', 'Sziegl Pince', 'Sümegi és Fiai Pincészet']
      },
      {
        id: 'kunsag',
        name: 'Kunsági borvidék',
        description:
          'A Kunsági borvidék Magyarország legnagyobb kiterjedésű borvidéke, amely jelentős szerepet játszik a hazai bortermelésben. A homokos talaj és a napfényes klíma sokféle szőlőfajta termesztését teszi lehetővé. A borvidék elsősorban könnyed, gyümölcsös borairól ismert, de egyre több minőségi tétel is megjelenik. Sokszínűsége miatt fontos alapja a magyar bor mindennapi fogyasztási kultúrájának.',
        famousWines: ['Irsai Olivér', 'Cserszegi fűszeres', 'Kékfrankos'],
        topWineries: ['Frittmann Borászat', 'Font Pincészet', 'Gedeon Birtok']
      }
    ]
  },
  {
    id: 'felso-magyarorszag',
    name: 'Felső-Magyarország borrégió',
    description:
      'A Felső-Magyarország borrégió Észak-Magyarország borvidékeit fogja össze. A hűvösebb klíma, a dombvidéki fekvések és a vulkanikus eredetű talajok komplex borokat eredményeznek. A régióban fehér- és vörösborok egyaránt fontosak. Eger, Mátra és Bükk együtt a magyar borászat egyik legsokszínűbb térségét alkotják.',
    regions: [
      {
        id: 'bukk',
        name: 'Bükki borvidék',
        description:
          'A Bükki borvidék kevésbé ismert, de egyre izgalmasabb szereplője a magyar boréletnek. A hűvösebb klíma és a Bükk hegység közelsége friss, savas és elegáns borok készítésének kedvez. A borvidéken fehérborok és könnyedebb vörösborok is készülnek. Az utóbbi években több kis pincészet is hozzájárult a térség újrafelfedezéséhez.',
        famousWines: ['Olaszrizling', 'Leányka', 'Kékfrankos'],
        topWineries: ['Gallay Kézműves Pince', 'Sándor Zsolt Pincészete', 'Büttner Borászat']
      },
      {
        id: 'eger',
        name: 'Egri borvidék',
        description:
          'Az Egri borvidék Magyarország egyik legismertebb történelmi borvidéke. Legfontosabb bora az Egri Bikavér, amely több szőlőfajta házasításából készül. A fehérborok között az Egri Csillag vált a borvidék meghatározó márkájává. Eger dűlői, történelmi pincéi és változatos borstílusai miatt a magyar borkultúra egyik központja.',
        famousWines: ['Egri Bikavér', 'Egri Csillag', 'Kékfrankos'],
        topWineries: ['St. Andrea Szőlőbirtok', 'Gál Tibor Pincészet', 'Kovács Nimród Winery']
      },
      {
        id: 'matra',
        name: 'Mátrai borvidék',
        description:
          'A Mátrai borvidék az ország egyik legnagyobb és legjelentősebb fehérboros területe. A Mátra déli lejtői sok napsütést kapnak, miközben a hegyvidéki hatás friss savakat biztosít. A borvidéken illatos, gyümölcsös fehérborok és könnyed vörösborok is készülnek. A modern borászat és a hagyományos szőlőtermesztés egyszerre van jelen a térségben.',
        famousWines: ['Irsai Olivér', 'Chardonnay', 'Kékfrankos'],
        topWineries: ['Benedek Pince', 'Szőke Mátyás Pincészet', 'Dubicz Borászat']
      }
    ]
  },
  {
    id: 'felso-pannon',
    name: 'Felső-Pannon borrégió',
    description:
      'A Felső-Pannon borrégió Nyugat- és Észak-Dunántúl borvidékeit foglalja magába. A régió sokszínű, hiszen pezsgőalapborok, friss fehérborok és komoly vörösborok is készülnek itt. A hűvösebb klíma több borvidéken elegáns savszerkezetet eredményez. A történelmi borvidékek és a modern borászatok együtt adják a régió karakterét.',
    regions: [
      {
        id: 'etyek-buda',
        name: 'Etyek-Budai borvidék',
        description:
          'Az Etyek-Budai borvidék Budapest közelében található, ezért a borturizmus szempontjából is kiemelt helyzetben van. Hűvösebb klímája miatt különösen alkalmas friss fehérborok és pezsgőalapborok készítésére. A borvidék modern pincészetei sokat tettek a térség ismertségéért. Az etyeki borok gyakran elegánsak, lendületesek és jól ihatók.',
        famousWines: ['Chardonnay', 'Sauvignon Blanc', 'Pinot Noir'],
        topWineries: ['Etyeki Kúria', 'Haraszthy Pincészet', 'Nádas Borműhely']
      },
      {
        id: 'mor',
        name: 'Móri borvidék',
        description:
          'A Móri borvidék kis méretű, de markáns karakterű történelmi borvidék. Legismertebb fajtája az Ezerjó, amely erősen kötődik a térség identitásához. A borvidék hűvösebb klímája és meszes talajai savhangsúlyos, feszes fehérborokat eredményeznek. Mór borászata egyszerre épít a hagyományokra és a modern borkészítésre.',
        famousWines: ['Ezerjó', 'Chardonnay', 'Rajnai rizling'],
        topWineries: ['Csetvei Pince', 'Miklós Csabi Pincéje', 'Paulus Borház']
      },
      {
        id: 'neszmely',
        name: 'Neszmélyi borvidék',
        description:
          'A Neszmélyi borvidék a Duna közelében, a Gerecse és a Vértes térségében található. A hűvösebb klíma és a folyó közelsége friss, illatos fehérboroknak kedvez. A borvidék borai általában jó savúak, gyümölcsösek és könnyen fogyaszthatók. A térségben a modern technológia és a tiszta, reduktív borkészítés különösen fontos szerepet kapott.',
        famousWines: ['Sauvignon Blanc', 'Chardonnay', 'Olaszrizling'],
        topWineries: ['Hilltop Neszmély', 'Kősziklás Borászat', 'Kamocsay Ákos Borászata']
      },
      {
        id: 'pannonhalma',
        name: 'Pannonhalmi borvidék',
        description:
          'A Pannonhalmi borvidék történelmi és kulturális szempontból is kiemelt jelentőségű terület. A Pannonhalmi Főapátság borkultúrája évszázados hagyományokra épül. A borvidék főként elegáns fehérborairól ismert, de vörösborok is készülnek. A löszös, agyagos talaj és a mérsékelt klíma harmonikus, jó savú borokat eredményez.',
        famousWines: ['Rajnai rizling', 'Olaszrizling', 'Pinot Noir'],
        topWineries: ['Pannonhalmi Főapátság Pincészete', 'Cseri Pincészet', 'Babarczi Szőlőbirtok']
      },
      {
        id: 'sopron',
        name: 'Soproni borvidék',
        description:
          'A Soproni borvidék Magyarország egyik legfontosabb vörösboros területe, különösen a Kékfrankos miatt. Az Alpok közelsége hűvösebb klímát ad, ami elegáns, savakban gazdag vörösborokat eredményez. A borvidék történelmi kapcsolatai Ausztriával is erősen formálták borkultúráját. Sopron a Kékfrankos egyik legismertebb hazai központja.',
        famousWines: ['Kékfrankos', 'Zweigelt', 'Pinot Noir'],
        topWineries: ['Weninger Pincészet', 'Pfneiszl Birtok', 'Taschner Bor- és Pezsgőház']
      }
    ]
  },
  {
    id: 'pannon',
    name: 'Pannon borrégió',
    description:
      'A Pannon borrégió Dél-Dunántúl melegebb borvidékeit fogja össze. A régióban a mediterrán hatások miatt különösen jó adottságok vannak testes vörösborok készítéséhez. Szekszárd és Villány országosan is kiemelkedő vörösboros központok. Emellett Pécs és Tolna is sokszínű, saját karakterrel rendelkező borvidék.',
    regions: [
      {
        id: 'pecs',
        name: 'Pécsi borvidék',
        description:
          'A Pécsi borvidék mediterrán hangulatú, melegebb klímájú dél-dunántúli terület. A borvidék történelmi múltja jelentős, Pécs városa régóta fontos kulturális központ. A térségben fehér- és vörösborok is készülnek, de különlegessége a Cirfandli. A borvidék kis mérete ellenére egyedi karaktert képvisel a magyar borászatban.',
        famousWines: ['Cirfandli', 'Chardonnay', 'Cabernet Sauvignon'],
        topWineries: ['Littke Pezsgőház', 'Schunk Pince', 'Mecsekaljai Borászat']
      },
      {
        id: 'szekszard',
        name: 'Szekszárdi borvidék',
        description:
          'A Szekszárdi borvidék Magyarország egyik legfontosabb vörösboros borvidéke. A löszös dombok és a meleg klíma kiváló feltételeket biztosítanak a Kadarka, Kékfrankos és Bordeaux-i fajták számára. A Szekszárdi Bikavér a borvidék egyik legismertebb házasítása. A térség borai gyakran elegánsak, fűszeresek és gyümölcsösek.',
        famousWines: ['Szekszárdi Bikavér', 'Kadarka', 'Kékfrankos'],
        topWineries: ['Heimann Családi Birtok', 'Takler Borbirtok', 'Eszterbauer Borászat']
      },
      {
        id: 'tolna',
        name: 'Tolnai borvidék',
        description:
          'A Tolnai borvidék sokszínű, nagyobb kiterjedésű dél-dunántúli borvidék. A változatos talaj és klíma miatt fehér- és vörösborok is készülnek itt. Bár kevésbé ismert, mint Villány vagy Szekszárd, minőségi borászatai fontos szerepet töltenek be. A borvidék jó adottságú területei gyümölcsös, harmonikus borokat adnak.',
        famousWines: ['Chardonnay', 'Kékfrankos', 'Merlot'],
        topWineries: ['Tűzkő Birtok', 'Lajvér Borbirtok', 'Danubiana Borászat']
      },
      {
        id: 'villany',
        name: 'Villányi borvidék',
        description:
          'A Villányi borvidék Magyarország egyik legismertebb vörösboros területe. A meleg, mediterrán jellegű klíma különösen kedvez a testes, gazdag vörösboroknak. A Cabernet Franc kiemelt szerepet kap, amely Villányi Franc néven a borvidék egyik legfontosabb márkája. Villány modern pincészetei és pincesorai a magyar borturizmus kiemelt célpontjai.',
        famousWines: ['Cabernet Franc', 'Merlot', 'Portugieser'],
        topWineries: ['Gere Attila Pincészete', 'Bock Pince', 'Vylyan Pincészet']
      }
    ]
  },
  {
    id: 'tokaji',
    name: 'Tokaji borrégió',
    description:
      'A Tokaji borrégió Magyarország egyik legismertebb és nemzetközileg is legfontosabb borvidéki területe. Egyetlen borvidéket foglal magába, a Tokaji borvidéket. Világhírét elsősorban a Tokaji aszúnak és a különleges természetes édes boroknak köszönheti. A vulkanikus talaj, a Bodrog és a Tisza közelsége, valamint a nemesrothadás kialakulásának feltételei egyedülállóvá teszik.',
    regions: [
      {
        id: 'tokaj',
        name: 'Tokaji borvidék',
        description:
          'A Tokaji borvidék Magyarország legismertebb történelmi borvidéke, amely az UNESCO világörökség része. Vulkanikus talaja és különleges mikroklímája ideális feltételeket biztosít a nemesrothadás kialakulásához. A borvidék világhírét a Tokaji aszú alapozta meg, de a száraz Furmintok is egyre nagyobb szerepet kapnak. Tokaj a magyar borkultúra egyik legfontosabb jelképe.',
        famousWines: ['Tokaji Aszú', 'Furmint', 'Hárslevelű'],
        topWineries: ['Szepsy Pincészet', 'Disznókő', 'Oremus']
      }
    ]
  }
];