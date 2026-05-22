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
      'A Balaton körüli vulkanikus és mészköves talajok nagyon változatos borokat adnak. A régió legismertebb területei közé tartozik Badacsony, Balatonfüred–Csopak és Somló. Főként fehérborairól híres, különösen az olaszrizlingről, a szürkebarátról és a juhfarkról. A balatoni klíma lágyabb savakat és gyümölcsös karaktert ad a boroknak.',
    regions: [
      {
        id: 'badacsony',
        name: 'Badacsonyi borvidék',
        description:
          'A Balaton északi partján fekvő borvidék, szőlőültetvényei a tanúhegyek – Badacsony, Csobánc, Szent György-hegy, Ábrahámhegy, Örsi-hegy és Szigliget – déli, délnyugati napfényes lejtőin helyezkednek el. Földrajzi fekvése és klímája miatt lehetséges, hogy még nagyon kedvezőtlen évjáratokban is gazdag ízvilágú, zamatos borok készülnek. Aki a Badacsony vidékéről származó bort kóstol, egyszerre érezheti a bazalt kőzetek ásványának ízét, a tanúhegyek sósságát és a Balaton leheletét a poharában.',
        famousWines: ['Kéknyelű', 'Olaszrizling', 'Szürkebarát', 'Budai zöld', 'Zenit'],
        topWineries: ['Borbély Családi Pincészet', 'Istvándy Családi Birtok', 'Laposa Birtok','Málik Pince', 'Szörényi Családi Pince']
      },
      {
        id: 'balatonboglar',
        name: 'Balatonboglári borvidék',
        description:
          'A balatoni turizmus fellegvára, a napfény sütötte déli part. Területe Somogy megyében, a Külső- és Belső-Somogy lankáin terül el, a Balaton déli partján Zamárditól Balatonföldváron, Balatonlellén keresztül Balatonberényig, dél felé Andocs és Tab vonaláig terjed. Klímája igen kedvező a szőlőtermesztésre nézve, sok napfénnyel ellátott, kiegyenlített időjárás, szüret idején a mediterrán hatásnak köszönhetően hosszú, napsütéses nappalok jellemzőek. A borok ízvilágában fellelni vélhetjük a Balaton homokos-agyagos talaját is, egyaránt fehér- és vörösbortermő vidékről beszélhetünk.',
        famousWines: ['Chardonnay', 'Irsai Olivér', 'Királyleányka', 'Olaszrizling', 'Merlot'],
        topWineries: ['Bujdosó Pincészet', 'Garamvári Szőlőbirtok', 'Ikon Borászat', 'Kislaki Bormanufaktúra', 'Konyári Pincészet']
      },
      {
        id: 'balaton-felvidek',
        name: 'Balaton-felvidéki borvidék',
        description:
          'A Káli-medence északi részében fekvő borvidék a Balaton-felvidék (Zalahaláp, Hegyesd, Monostorapáti, Mindszentkálla), a Keszthelyi-hegység és Sümeg környékét foglalja magába. A badacsonyi borvidék kistestvéreként szokás rá hivatkozni, a vulkáni kőzetek adta bazalt és tufa ízvilágát fedezhetjük fel boraiban. Egy ilyen domináns karakterű termőtalajon a kőzet ízvilága dominál a fajtajelleg helyett.',
        famousWines: ['Olaszrizling', 'Sauvignon blanc', 'Chardonnay', 'Cserszegi fűszeres', 'Pinot noir'],
        topWineries: ['Capári Pincészet', 'Istvándy Jenő Pincészete', 'Káli Kövek', 'Kőróka Pincészet', 'Medvebor Pince']
      },
      {
        id: 'balatonfured-csopak',
        name: 'Balatonfüred-Csopaki borvidék',
        description:
          'Egy olyan borvidék, mely történelmi szempontból már a római korban is jelentős volt, ahol egy 1082-ből származó hiteles okmány szerint Veszprém püspöke Csopakon szőlőbirtokkal rendelkezett. Két különböző bortermő tájra oszlik: a balatonfüredi borok testesebbek, tüzesebbek, alkoholszintjük magasabb, a csopaki borok ezzel szemben tartózkodóbbak, könnyedebbek, illatban és zamatban gazdagabbak. Jelentős bortermő települések közé tartozik még Felsőörs, Paloznak, Tihany, Balatonszőlős, Pécsely és Szentantalfa. A borvidék különlegessége a 2012-ben kiadott Csopaki Kódex, melynek célja a csopaki bor identitásának visszaállítása és az egyediségének megerősítése, bázisa az olaszrizling.',
        famousWines: ['Pinot noir', 'Cabernet franc', 'Zweigelt', 'Merlot', 'Olaszrizling'],
        topWineries: ['Balogh Pincészet', 'Figula Pincészet', 'Jásdi Pince', 'Koczor Pince', 'Szent Donát Pince']
      },
      {
        id: 'somlo',
        name: 'Somlói borvidék',
        description:
          'A mindenki által egyszerűen csak Somlónak hívott borvidék hivatalos elnevezése Nagy-Somlói Borvidék. Magyarország legkisebb, de nagy múlttal rendelkező borvidéke, a Kisalföld és a Bakony találkozásánál található. A borvidék jellegzetessége a sokak által ismert mogyorós, diós, mandulás ízjegyekkel büszkélkedő somlai juhfark.',
        famousWines: ['Furmint', 'Olaszrizling', 'Juhfark', 'Hárslevelű'],
        topWineries: ['Dénes Hegybirtok', 'Fekete Pince', 'Györgykovács Pincészet', 'Kőfejtő Pince', 'Kreinbacher Birtok']
      },
      {
        id: 'zala',
        name: 'Zalai borvidék',
        description:
          'A legfiatalabb borvidékünk, előtte Balatonmelléki borvidéknek hívták. A borvidékhez tartozó községek elszórtan találhatók a Zalai-dombság területén és a Keszthelyi-hegység északnyugati lejtőin. Boronapincék sora bizonyítja, hogy a zalai dombokon a borkészítés több mint 100 éves hagyományra tekint vissza.',
        famousWines: ['Olaszrizling', 'Szürkebarát', 'Cserszegi fűszeres', 'Zweigelt', 'Kékfrankos'],
        topWineries: ['Bezerics-Németh Borház', 'Bussay Pince', 'Lukács Pincészet', 'Mándli Borház', 'Vinum Veress']
      }
    ]
  },
  {
    id: 'duna',
    name: 'Duna borrégió',
    description:
      'Magyarország legnagyobb bortermő régiója az Alföldön helyezkedik el. A homokos talaj és a sok napsütés könnyed, illatos, jól iható borok készítésének kedvez. Jellegzetes fajtái a cserszegi fűszeres, az ezerjó és a kadarka. A régió fontos szerepet játszik a nagy mennyiségű hazai bortermelésben.',
    regions: [
      {
        id: 'csongrad',
        name: 'Csongrádi borvidék',
        description:
          'A Tisza alsó folyása mentén fekszik, a Tisza jobb partján fekszik, csapadékszegény klíma jellemzi. A borvidék a szőlő tenyész időszakában az ország legmelegebb és napfényben leggazdagabb tája. A sok napfény és a magas hőösszeg segíti a jó beérést, a cukorképződést.',
        famousWines: ['Rajnai rizling', 'Kövidinka', 'Kunleány', 'Olaszrizling', 'Zala gyöngye'],
        topWineries: ['Bodor Martin Családi Borászata', 'Tóth Pincészet', 'Ujvári Pincészet', 'Ungerbauer Családi Borpince']
      },
      {
        id: 'hajos-baja',
        name: 'Hajós-Bajai borvidék',
        description:
          'Az alföldi borvidékek részét képezi, a Kunság és Csongrád között, a Duna-Tisza közének déli részén. A legmelegebb borvidék. A talajviszonyok következtében a régió fehérborai lágyak, savakban szegényebbek hegyvidéki társaiknál. A hajósi borok a szép, selymes szerkezetű, jól iható vörösborok. A vidék legkedveltebb látványossága a hajósi pincefalut alkotó jellegzetes présházak.',
        famousWines: ['Cserszegi fűszeres', 'Irsai Olivér', 'Olaszrizling', 'Chardonnay', 'Sauvignon blanc'],
        topWineries: ['Huber Pince', 'Knehr Pince', 'Koch Borászat', 'Kovács Borház', 'Schön Pince']
      },
      {
        id: 'kunsag',
        name: 'Kunsági borvidék',
        description:
          'A borvidék a történelmi Kiskunság vidékét foglalja magába, legnagyobb része a Duna-Tisza közén található, csak Tiszaföldvár térségében nyúlik át a Tiszántúlra. A homoki borok országa, méretét tekintve a legnagyobb borvidékünk. A térség borai általában könnyűek, savakban lágyak, zamatanyagokban szegényebbek, nem olyan testesek, mint a domb- és hegyvidéki területek borai, viszonylag gyorsan öregednek, többnyire egyszerűbb karakterű borok. A vidék fehérborai a talajnak megfelelően általában savszegények, nem túl gazdagok alkoholban sem. Az itteni vörösborok savai nem bántóak, könnyen ihatók, barátságosak.',
        famousWines: ['Arany sárfehér', 'Zala gyöngye', 'Ezerjó', 'Cserszegi fűszeres', 'Kunleány'],
        topWineries: ['Birkás Pincészet', 'Font Pincészet', 'Frittmann Borászat', 'Gál Szőlőbirtok és Pincészet', 'Gedeon Pincészet']
      }
    ]
  },
  {
    id: 'felso-magyarorszag',
    name: 'Felső-Magyarország borrégió',
    description:
      'Ide tartozik Eger, Mátra és Bükk vidéke. A régió sokszínű: készülnek testes vörösborok és friss fehérek is. Az Egri Bikavér és az Egri Csillag országosan ismert borstílusok. A vulkanikus eredetű talaj sok bornak ásványos karaktert kölcsönöz.',
    regions: [
      {
        id: 'bukk',
        name: 'Bükki borvidék',
        description:
          'Eger és Mátra között, a Bükki-hegység déli lábánál elhelyezkedő, a régióban a harmadik borvidék. Jellegzetes, riolittufába vájt pincékben tárolják a bort, a híres miskolci bort nemes penésszel vastagon borított pincékben érlelték. A környék borainak eleven, szép savszerkeze a terület mikroklímájának köszönhető, kiváló pezsgőalapborok készülnek itt. A környék jellemzően fehérszőlő (60%) borítja, de fellelhető kékszőlő is, legkedveltebb borfajta a tibolddaróci olaszrizling.',
        famousWines: ['Leányka', 'Chardonnay', 'Cserszegi fűszeres', 'Olaszrizling',  'Zenit'],
        topWineries: ['Anna Pincészet', 'Bűdi Borház és Szőlőbirtok', 'Gallay Pince', 'Hajdu Roland', 'Sándor Zsolt']
      },
      {
        id: 'eger',
        name: 'Egri borvidék',
        description:
          'A borvidék a Mátra és a Bükk-hegység között, az Északi-középhegység és az Alföld találkozási vonalán fekszik. A termőhelyi adottságok és a fajtaösszetétel kiváltságos helyzetet teremtett a borvidék számára, alkalmassá teszi arra, hogy vörös- és fehérborból egyaránt csúcsminőség készüljön. Fehérben két stílus különböztethető meg: a karcsú, magasabb savtartalmú szárazak és a fahordós érlelést követően, magasabb alkoholtartalommal, esetleg kevés maradékcukorral palackozott komolyabb tételek. Az előbbiek gazdag illatvilágukkal, az utóbbiak telt, húsos struktúrájukkal, olajos simaságukkal gyönyörködtetnek.',
        famousWines: ['Rhone királynője (syrah)', 'Kékfrankos', 'Kékoportó', 'Bíborkadarka', 'Blauburger'],
        topWineries: ['Demeter Borbár', 'Hagymási Pincészet', 'Juhász Testvérek Pincészete', 'Kovács Nimród Pincészete', 'Ostoros Családi Pincészet']
      },
      {
        id: 'matra',
        name: 'Mátrai borvidék',
        description:
          'A mátrai, bükki, egri borvidékek alkotta régió évtizedeken keresztül csak a nagyüzemi, alsó kategóriás, olcsó borokat termelte, holott egyedisége és a hűvösebb klíma adta könnyed, virágos és gyümölcsös tónus valódi borélményt nyújt. A kunság után így is a második legnagyobb borvidékünk, „fővárosa” Gyöngyös. Elsősorban fehérbortermő vidék, hozzávetőleg 70% jelenleg a fehér fajták aránya, viszont az utóbbi időben a kékszőlő térnyerése figyelhető meg. A vörösborokat a korai gyümölcsös, szép savú, lendületes ízvilág jellemzi.',
        famousWines: ['Olaszrizling', 'Leányka', 'Kadarka', 'Rizlingszilváni', 'Kékfrankos'],
        topWineries: ['Babiczki Pince', 'Bárdos és Fia Pincészet', 'Dubicz Borászat és Szőlőbirtok', 'Karner Gábor kézműves borászata', 'Losonci Pincészet']
      }
    ]
  },
  {
    id: 'felso-pannon',
    name: 'Felső-Pannon borrégió',
    description:
      'Az Észak-Dunántúl borvidékeit foglalja magába, például Sopront, Pannonhalmát és Etyek-Budát. Hűvösebb éghajlata miatt elegáns savszerkezetű borok készülnek itt. Sopron híres a kékfrankosról, míg Etyek a pezsgőalapborairól és friss fehérborairól ismert. A régióban egyre jelentősebb a prémium pezsgőkészítés.',
    regions: [
      {
        id: 'etyek-buda',
        name: 'Etyek-Budai borvidék',
        description:
          'A Dunántúl északi részén fekvő öt, kisebb területű borvidék (Etyek–Buda, Mór, Neszmély, Pannonhalma és Sopron) a Felső-Pannon Borrégiót alkotja. A Törley-pezsgők okán talán a főváros szomszédságában fekvő Etyek–Budai borvidék a legismertebb. A borvidék a Dunántúli-középhegység északkeleti területein, a Gerecse-hegység déli részétől a Velencei- és a Budai-hegységig húzódik. Hűvös klímája a francia Champagne borvidékére hajaz, ami miatt a magyar pezsgőgyártás Budafokon találta meg a bölcsőjét.',
        famousWines: ['Chardonnay', 'Irsai Olivér', 'Olaszrizling', 'Szürkebarát', 'Sauvignon blanc'],
        topWineries: ['Anonym Pince', 'Debreczeni Pince', 'Etyeki Kúria', 'György-Villa Pincészet', 'Hernyák Birtok']
      },
      {
        id: 'mor',
        name: 'Móri borvidék',
        description:
          'Azt mondják, a legjobb ezerjó a móri borvidéken terem. Két hegység, a Vértes és a Bakony között húzódik meg a festői szépségű Móri árok. A móri borok kemények, alkoholban gazdagok, szépsavúak, lassan öregednek. A fehér fajták aránya eléri a 96%-ot.',
        famousWines: ['Ezerjó', 'Chardonnay', 'Tramini', 'Királyleányka', 'Rajnai rizling'],
        topWineries: ['Bozóky Pincészet', 'Csetvei Pincészet', 'Geszler Családi Pince', 'Miklós Csabi', 'Paulus Borház']
      },
      {
        id: 'neszmely',
        name: 'Neszmélyi borvidék',
        description:
          'Területe jelentős része a Gerecse nyugati része, északról a Duna, nyugatról a Kisalföld határolja. Egyik legkisebb borvidékünk. A kevesebb azonban néha több, ahogy a mondás is tartja: Neszmély a magyar „csavarzárasok” forgalmánál piacvezető, ráadásul több évtizede az angol fogyasztó is küzd a borvidék nevének helyes kiejtésével. A borok stílusát tekintve bárki által könnyen fogyasztható, acéltartályban hűtött erjesztéssel, jellemzően illatos fajtákból készült borok találhatók itt. Klímája okán a fehér szőlőfajták vannak túlsúlyban a vörösekhez képest.',
        famousWines: ['Irsai Olivér', 'Cserszegi Fűszeres', 'Királyleányka', 'Fűszeres tramini', 'Sauvignon blanc'],
        topWineries: ['Bibok Pincészet', 'Bősze Pincészet', 'Hilltop Neszmély ', 'Kősziklás Borászat', 'Petőcz Pincészet']
      },
      {
        id: 'pannonhalma',
        name: 'Pannonhalmi borvidék',
        description:
          'A térség szerzetesi kultúrájának nélkülözhetetlen kelléke volt a bor. A bencés regula előírja a rend önfenntartó „stratégiáját”, vagyis, hogy lehetőség szerint maguk termeljék meg a szükséges javakat, ezek közül is a legfontosabbak egyikét, a búza mellett a bort. Területét tekintve a Pannonhalmi-dombság Győr-Moson-Sopron megye déli részén helyezkedik el. A fiatalnak mondható ültetvényállomány adja a borvidék friss, reduktív, könnyed fehérbor stílusát, amit Pannonhalma – a felső Loire-völgyre, illetve Elzászra emlékeztető – környezeti adottságai egyértelműen támogatnak. A teljes termőterületből bő 80% fehérszőlő.',
        famousWines: ['Olaszrizling', 'Rajnai rizling', 'Irsai Olivér', 'Tramini', 'Sauvignon blanc'],
        topWineries: ['Babarczi Szőlőbirtok és Pincészet', 'Cseri Pincészet', 'Pannonhalmi Főapátság Pincészete', 'Prisztóka Pincészet', 'Tóth Borbirtok']
      },
      {
        id: 'sopron',
        name: 'Soproni borvidék',
        description:
          'A soproni borvidék az ország egyik legősibb bortermő területe. Szőlőmag-leletek bizonyítják, hogy már a kelták is foglalkoztak itt szőlőműveléssel, a borkészítés Sopron környékén töretlenül folyik azóta is. Területe a Soproni- és a Kőszegi-hegység lankáin és a Fertő-tó partján terül el, az egyik legkisebb borvidékünk. A bor stílusát tekintve hűvös színekkel és illatokkal találkozhatunk, az Alpok adta hűsítő hatás vörös borainak megfelelő savgerincet biztosít.',
        famousWines: ['Zöldveltelini', 'Sauvignon blanc', 'Kékfrankos', 'Zweigelt'],
        topWineries: ['Garger Pince', 'Jandl Pince', 'Linzer-Orosz Borászat', 'Luka Pincészet', 'Weninger Pincészet']
      }
    ]
  },
  {
    id: 'pannon',
    name: 'Pannon borrégió',
    description:
      'A Dél-Dunántúl melegebb klímájú borvidékeit foglalja össze, köztük Villányt és Szekszárdot. Ez Magyarország egyik legfontosabb vörösboros térsége. A cabernet franc, merlot és kékfrankos mellett a kadarka is meghatározó fajta. A villányi borok általában testesebbek, míg Szekszárd elegánsabb, fűszeres vörösöket ad.',
    regions: [
      {
        id: 'pecs',
        name: 'Pécsi borvidék',
        description:
          'A pécsi borvidék a Mecsek déli lejtőin terül el, egészen Mohácsig fut. A Mecsek szélvédettsége miatt még négyszáz méter felett is találunk szőlőt, ami igen ritka hazánkban. A borvidék több mint 90%-a első osztályú besorolást kapott, a teljes állomány 70-80%-a fehérszőlő. A meleg éghajlatnak és a kevés csapadéknak köszönhetően a vidék borai általában testesek, gyakran magas cukor- és alkoholtartalommal, fűszerességgel.',
        famousWines: ['Olaszrizling', 'Chardonnay', 'Királyleányka', 'Rizlingszilváni', 'Zöldveltelini'],
        topWineries: ['István Pince', 'Lisicza Pincészet', 'Schunk Pince', 'Somogyi Tibor Pincészete', 'Wekler Pince']
      },
      {
        id: 'szekszard',
        name: 'Szekszárdi borvidék',
        description:
          'Egyik legismertebb és legnépszerűbb borvidékünk, a Tolna-Baranyai-dombság és a Dunamenti-síkság között terül el, a Sárköztől nyugatra. Az ültetvények zöme, 83% kékszőlő. A déli és keleti tájolású meredek lejtők adják a legmagasabb minőségű borokat, míg a nyugati és északi lejtők valamivel gyengébb minőséget produkálnak, noha fehérbor termelésére ezek alkalmasabbak. A kékfrankos a borvidék vezető szőlőfajtája, ez adja a borvidék borainak gerincét, a szekszárdi borpiramis első pillére. Nem kizárólag önállóan, de a bikavér borok alapjaként is évtizedek óta jó szolgálatot tesz.',
        famousWines: ['Kékfrankos', 'Kadarka'],
        topWineries: ['Bodri Pincészet', 'Dúzsi Tamás és Családja', 'Eszterbauer Borászat', 'Fekete Borpince', 'Heimann Családi Birtok']
      },
      {
        id: 'tolna',
        name: 'Tolnai borvidék',
        description:
          'A tolnai borvidék az egyik legfiatalabb borvidékünk. A tolnai bor a robosztus szekszárdi bikavér felvezetőjeként az egyik legelegánsabb aperitif fehérborként is definiálható. A borvidék egyik fő büszkesége a györkönyi pincefalu.',
        famousWines: ['Olaszrizling', 'Rajnai rizling', 'Cserszegi fűszeres', 'Sauvignon blanc', 'Zöldveltelini'],
        topWineries: ['Bóka Birtok', 'Braun-Bősz Pincészet', 'Illés Borház', 'Reizinger', 'Szedmák Pince']
      },
      {
        id: 'villany',
        name: 'Villányi borvidék',
        description:
          'A legdélebben fekvő és legmelegebb borvidékünk egyben az egyik legismertebb. Amíg a fehérborai a frissességükkel együtt is kerekebb testtel, érett gyümölcsösséggel és lágyabb savakkal örvendeztetik meg a fogyasztót, addig a vörösborai komplex „gyümölcskosár” mellett a fűszeresség magasiskoláját képviselik. A villányi borok már a XIX. században egészen Amerikáig és Brazíliáig eljutottak.',
        famousWines: ['Chardonnay', 'Hárslevelű', 'Olaszrizling', 'Rajnai rizling', 'Pinot blanc'],
        topWineries: ['Bock Borászat', 'Gere Attila Pincészete', 'Gere Tamás és Zsolt Pincészet', 'Kiss Gábor Szőlőbirtoka és Pincészete', 'Sauska Pincészet']
      }
    ]
  },
  {
    id: 'tokaji',
    name: 'Tokaji borrégió',
    description:
      'Magyarország legismertebb borvidéke, amely önálló borrégiót alkot. Világhírét a tokaji aszú alapozta meg, amely nemes penésszel érintett szőlőből készül. A furmint és a hárslevelű a legfontosabb szőlőfajták. A vulkanikus talaj és a Bodrog–Tisza találkozásának mikroklímája különleges, komplex borokat eredményez.',
    regions: [
      {
        id: 'tokaj',
        name: 'Tokaji borvidék',
        description:
          'Az ország legmagasabb alkohol-, cukor- és savtartalmú borai születnek Tokaj-Hegyalján, a térség földrajzi fekvésének és klímájának köszönhetően. Az aszúkészítés „fellegvára”. A minőség elérésében az érlelés és a tárolás szerepe sem elhanyagolható: riolittufába vájt pincében tárolják a hordókat. A világhírű aszúk és szamorodnik e nemes rothadású szőlőszemek hozzáadásával készülnek, a bor annál értékesebb, minél több aszúszőlőt tartalmaz.',
        famousWines: ['Furmint', 'Aszú', 'Hárslevelű', 'Sárgamuskotály', 'Zéta'],
        topWineries: ['Árvay Családi Pincészet', 'Áts Pincészet', 'Demeter Zoltán Pincészet', 'Disznókő', 'Holdvölgy Borászat']
      }
    ]
  }
];