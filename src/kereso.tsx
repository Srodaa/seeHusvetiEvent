import { useState } from "react";

type versType = {
  vers: string;
  category: string;
};
const versek: versType[] = [
  {
    vers: "Fakadó rügy, szellő hozta, Madár szállt az ablakunkra, Nagy vidáman azt dalolta, Itt nyílik a legszebb rózsa. Jó szagú a rózsavizem, Eljöttem, hogy megöntözzem. Nesze, nesze, rózsaszál, Soha el ne hervadjál.",
    category: "SZÉP"
  },
  {
    vers: "Minek a szép virág, hogyha hervadozik, Akkor virul igazán, mikor megöntözik. Eljöttem, hát hozzád, hogy felfrissítselek, Friss harmatvízzel most megöntözzelek!",
    category: "SZÉP"
  },
  {
    vers: "Kicsi a kertem, sok a virág, sietnem kell várnak az ibolyák. Meglocsolom szépen, nap süt az égen, ragyogjanak nékem nárciszok, rózsák, violák a réten.",
    category: "SZÉP"
  },
  {
    vers: "E háznak kertjében van egy rózsatő, Azt gondozza, azt öntözi a Jó Teremtő, Vizet öntök a fejére, Szálljon áldás a kezére, Az Istentől kérem, Piros tojás a bérem.",
    category: "SZÉP"
  },
  {
    vers: "Rózsa, rózsa szép virágszál, Szálló szélben hajladozzál. Napsütésben nyiladozzál, Meglocsollak, illatozzál.",
    category: "SZÉP"
  },
  {
    vers: "Korán reggel útra keltem, Se nem ittam, se nem ettem. Tarisznya húzza a vállam, Térdig kopott már a lábam. Bejártam a fél világot, Láttam sok-sok szép virágot. A legszebbre most találtam, Hogy öntözzem, alig vártam.",
    category: "SZÉP"
  },
  {
    vers: "Már eljött az idő, hogy megújuljatok, A Szentlélek Isten szálljon tireátok. No, ti cimboráim, csuporra, vederre, Adjuk meg a lánynak a tisztet reggelre! Hanem egy szót szólok ezen szép leánynak, Adjon egy pár hímest, Szívembol kívánom, kegyelem magának!",
    category: "SZÉP"
  },
  {
    vers: "Eljött a szép húsvét reggele, Feltámadásunk édes ünnepe. Ünneplő ruhákba öltöztek a fák, Pattognak a rügyek, s virít a virág. A harang zúgása hirdet ünnepet, Egy kismadár dalol a zöld rétek felett. Tündérország rózsái közt gyöngyharmatot szedtem, Akit azzal meglocsolok, megáldja az Isten. Az illatos rózsavíztől megnőnek a lányok, Zsebeimbe beleférnek a piros tojások.",
    category: "SZÉP"
  },
  {
    vers: "Korán reggel felébredtem, messze-messze jártam, Tündérország kiskertjéből rózsavizet hoztam. Na, te kislány, megöntözlek, ma van húsvét napja, Tündököljön a két orcád, mint a piros rózsa. Az illatos rózsavíztől megnőnek a lányok, Zsebemben is elférnek a piros tojások.",
    category: "SZÉP"
  },
  {
    vers: "Rózsavizes húsvét napját jöttem ma kívánni, Nem szeretnék a lányokra nagyon sokat várni! Ez a pár csepp jó szagos víz úgy használ a lánynak, Mint a réten a gyöngyharmat a nyíló virágnak.",
    category: "SZÉP"
  },
  {
    vers: "Olyan lesz az arcuk tőle, mint a hamvas virág, Örömünkben együtt örül a megváltott világ. Megváltónk is együtt örül az egész világgal, Ajándékozzatok meg hát egy hímes tojással!",
    category: "SZÉP"
  },
  {
    vers: "Locsolni jöttem, nem titkolom, Szép szokás ez, úgy gondolom. Múljon vizemtől a téli álom, Bizony most én ezt kívánom. Ha a hatása múlik is esztendőre, Ígérem, itt leszek jövőre. S nem adok az illendőre, Locsolok kérdezés nélkül, nyakra, főre.",
    category: "SZÉP"
  },
  {
    vers: "Kelj föl párnáidról szép ibolyavirág. Nézz ki az ablakon milyen szép a világ. Megöntözlek szépen, az ég harmatával, Teljék a tarisznya szép piros tojással.",
    category: "SZÉP"
  },
  {
    vers: "Öröm, hogy itt a feltámadás! Elkészült a pirostojás! Húsvét ünnep emlékére, Keresztények örömére: Adjon Isten jó, bő áldást, Köszönöm a szíves látást!",
    category: "SZÉP"
  },
  {
    vers: "Messze földön jártam, Szép harmatos reggel, Aranytündér kútvizéből Vizet merítettem. Aranytündér kútvizével Öntözgetni járok, Olyan szagos, mint a rózsa, Gyertek ti is, lányok!",
    category: "SZÉP"
  },
  {
    vers: "Napsütötte szép tájakon jöttem végig az utakon. Felém hajolt sok-sok virág, rózsavizük osztogatták. Megöntözlek most itt véle, piros tojást kérek érte.",
    category: "SZÉP"
  },
  {
    vers: "Mosolyog a napsugár, mosolyog az ég is, locsolkodok, tojást kapok, s mosolygok majd én is.",
    category: "SZÉP"
  },
  {
    vers: "Eljöttem locsolkodni a legszebbb ruhámban, Szépen gyűlnek a százasok a bukszámban. Hogy el ne hervadjál meglocsollak Téged, Kinyitom a bukszám és ne sajnáld a pénzed! Szabad a locsolkodni?",
    category: "VICCES"
  },
  {
    vers: "Locsoláskor arról szól a fáma, Hogy minden leány örüljön máma. Az örömöt én is csak növelni jöttem, Mint megannyian előttem, s mögöttem. Az életről szólnak e napok, De életvizet sajna, sehol sem kapok. Vettem hát kristályvizet, s hoztam azt magammal, Gondolom, ezt itt sem fogadják haraggal. Ennek tehát illata nincsen, De tiszta szívvel adom, ez minden. Versem végéről nem feledhetem a kérdest, de ide az bizony nem rímel, Így hát külön teszem fel: Szabad-e locsolni?",
    category: "VICCES"
  },
  { vers: "Zöld erdőben jártam, Három nyulat láttam, Abból kettő lázas, Hol az ötszázas?", category: "VICCES" },
  {
    vers: "Idén még a lányokon is spórolok, Az infláció miatt locsolómba vízet rakok. Cserében sem várok túl sokat, Csak hadd tömjem meg a pocakomat!",
    category: "VICCES"
  },
  {
    vers: "Ma egy-két lányhoz elbaktatok, Online mégsem locsolhatok! Kölnit vettem drága áron, Ha nem adsz tojást azt se bánom!",
    category: "VICCES"
  },
  { vers: "Én apró gyerek vagyok, locsolkodni akarok. Van tojás, vagy nincs, jó lesz a forint.", category: "VICCES" },
  {
    vers: "Virtuális locsolkodás, távolról is hatásos, Nekem sem kell kölni hozzá, s te sem leszel bűzbájos!",
    category: "VICCES"
  },
  { vers: "Objektumban jártam, úszott betont láttam, nem akart megkötni, megszabad-e locsolni?", category: "VICCES" },
  {
    vers: "Tarka réten jártam, sok virágot láttam, illatukat egy kis üvegbe bezártam ez a kis üvegcse itt lapul most nálam engedd meg hogy frizurádat vele eltaláljam.",
    category: "VICCES"
  },
  { vers: "Sivatagban él a teve, locsolkodni jöttem, hete", category: "VICCES" },
  {
    vers: "Locsolkodni jöttem, kettő is van nálam, Egyik a markomban, másik a gatyámban. Locsoló versikém tudom kissé vicces, De azért remélem, hogy nem volt nagyon giccses.",
    category: "VICCES"
  },
  { vers: "Itt állok reszketve, Locsolni szabad-e?", category: "VICCES" },
  { vers: "Meglocsollak kölnivel, Megcsókolsz-e érte?", category: "VICCES" },
  {
    vers: "Locsolkodni vicces dolog, mert ilyenkor vödröt fogok, hideg vízzel megtöltöm, a lányok fejére öntöm! Veled ilyet nem teszek, Inkább kölnit veszek. Szabad-e locsolni?",
    category: "VICCES"
  },
  { vers: "Kerek erdő,templom, locsolok-e ? Nem 'tom.", category: "VICCES" },
  {
    vers: "Van nekem egy kis locsolóm, Kölni nincsen benne, Ha én azt most elővenném, Nagy röhögés lenne.",
    category: "VICCES"
  },
  {
    vers: "Előttem van Észak, Hátam mögött Dél, Balra a nap Nyugszik, Jobbra pedig: Kél-e locsolni?",
    category: "VICCES"
  },
  {
    vers: "Nem vagyok én nyuszi, kell nekem a puszi! Gombold ki a blúzocskádat, hadd locsolom dombocskádat!",
    category: "VICCES"
  },
  {
    vers: "Van nekem egy locsolóm, Nem kölni van benne. Ha én azt itt elővenném, Nagy sikoltás lenne!",
    category: "VICCES"
  },
  { vers: "Zöld erdőben jártam, felmásztam egy fára. Kilukadt a nadrágom, kiesett a tojásom.", category: "VICCES" },
  {
    vers: "Itt állok gatyában, Locsoló van benne. Ha én azt elővenném. Nagy röhögés lenne! De én azt nem teszem, Mert kezemben a kölni! Locsolni jöttem, Nem pedig tökölni!",
    category: "VICCES"
  },
  { vers: "Zöld erdőben jártam, Két oroszlánt láttam. Az egyik lázas, Ide a százast!", category: "VICCES" },
  {
    vers: "Én nagy kertész legény vagyok, rózsavízzel vagánykodom, az én kölnim szuper jó, locsolkodni haj de jó.",
    category: "VICCES"
  },
  { vers: "Ajtó mellett állok, Piros tojást várok. Ha nem adják párjával, Elszökök a lányával!", category: "VICCES" },
  {
    vers: "Biciklivel érkeztem Negyven métert fékeztem Kiszakadt a nadrágom Kifigyelt a húsvéti tojásom. Szabad-e locsolni?",
    category: "VICCES"
  },
  {
    vers: "Népi rigmusokat kántálni nem fogok, Vicces locsolóverset sem igazán tudok. Ha már itt vagyok meg locsollak Téged, Ezért markomba piros tojást kérek.",
    category: "VICCES"
  },
  {
    vers: "Sivatagban jár a teve Tele van a töke vele Nálam van a töke leve Meglocsolhatlak-e vele?",
    category: "VICCES"
  },
  { vers: "Zöld erdőben jártam, Elszállott egy sirály, Locsolkodni jöttem, Hö, király!", category: "VICCES" },
  { vers: "Józsi vagyok, szép és laza, Locsoljak vagy menjek haza?", category: "VICCES" },
  { vers: "Illatos fű, moha, páfrány, Meglocsollak Házisárkány!", category: "VICCES" },
  { vers: "Piros golyó, zöld golyó, Meglocsollak, vén tojó!", category: "VICCES" },
  {
    vers: "Nem szoktam locsolkodni, csak erre jártam éppen, A kocsmában voltam, így spicces minden léptem. Hogy ma van húsvét, ki tartja ezt észben? De, hogy nincs nálam kölni, az már több mint szégyen. Szabad-e locso... őőő piros tojást kérni?",
    category: "VICCES"
  },
  {
    vers: "Zöld erdőben sose jártam Nincs ott wifi, nincsen áram Nincsenek csak nyuszik, pónik Szép vagy mint a kernelpánik",
    category: "VICCES"
  },
  { vers: "Részeg nyuszi mindjárt eldől Meglocsollak katéterből.", category: "VICCES" },
  {
    vers: "Közösségben jártam, karanténba zártak... Locsolni így nem tudok, lányok online utaljatok!",
    category: "VICCES"
  },
  {
    vers: "Védőmaszkban jár a nyuszi, locsolásért nem jár puszi! Itt maradok a szobámban, meglocsollak távmunkában!",
    category: "VICCES"
  },
  {
    vers: "Locsolkodni mennék, de minden hiába, Megszállt mindenkit a karantén világa! Csukd le a szemed és gondolj arra szépen, Kopogok az ajtódon, most engedsz be éppen!",
    category: "VICCES"
  },
  {
    vers: "Előveszem kölnimet és meglocsollak online, Ezen a Húsvéton, így frissül föl sok lány! Lányok, asszonyok nem kell búslakodni, Jövőre duplán fogok locsolkodni!",
    category: "VICCES"
  },
  {
    vers: "Ha Chuck Norrisnál húsvét lenne, a nők élete véget érne, nem azért, mert azt akarja, csak túl erős a villám karja! De bennem azért megbízhatsz, forgórugást nem kaphatsz, nem vagyok én olyan kemény, locsolásra van e remény?",
    category: "VICCES"
  },
  { vers: "Én vagyok a török, Locsolkodni jövök. Ha nem adnak pirostojást, Mindent összetörök.", category: "VICCES" },
  {
    vers: "Igaz, hogy én mókás vagyok, A vágyaim mégis nagyok: Meglocsollak és cserébe Tojást tegyél e tenyérbe! Csak tojással be nem érem, Az ÁFÁ-val együtt kérem.",
    category: "VICCES"
  },
  { vers: "Ól sarkában disznó röfög, meglocsollak, aztán mögyök!", category: "VICCES" },
  { vers: "Rózsavíz a kezembe, Hadd öntsem a fejedre!", category: "VICCES" },
  {
    vers: "E szép ajtón bekopogék Ha nem bánják, locsolkodnék Öntök asszonyt lányával, Várok tojást párjával. Ha pedig sajnáljátok, Mindjárt porrá áztok, Mert kölni helyett Vizet öntök rátok!",
    category: "VICCES"
  },
  {
    vers: "Szép lányokat kergetek, Az én kölnim permetez. Jó dolog a locsolás! Ide a piros tojást!",
    category: "VICCES"
  },
  { vers: "Fel a szoknyát,le a bugyit, Had locsoljam meg a nyuszit!", category: "VICCES" },
  {
    vers: "Zöld erdőben nem jártam, Kék ibolyát nem láttam, Így nem volt mi hervadjon, Ezért kár volt jönni locsolnom.",
    category: "VICCES"
  },
  {
    vers: "Locsolkodni jöttem és ez nem vicc, Az már igen, ha lent maradt a slicc. Félre ne értse, nem azzal locsolok, Inkább az illatos kölnimmel bódítok.",
    category: "VICCES"
  },
  {
    vers: "Az én locsolómra két tojás van festve! Hogyha azzal meglocsollak elmehetsz majd GYES-re!",
    category: "VICCES"
  },
  { vers: "Felnézek az égre a versemnek vége. Szabad a locsolni?", category: "VICCES" },
  { vers: "Zöldell a rét, Mosolyog az ég is. Adjanak egy ezrest, Mosolygok majd én is!", category: "VICCES" },
  {
    vers: "Itt vagyok, Friss vagyok, Máris sorba állok! Csak egy kicsit meglocsollak, Aztán odébb állok.",
    category: "VICCES"
  },
  {
    vers: "Húsvétra szép locsolóverset írok, Amiért remélem piros tojást kapok. Vicces lesz azt biztosra veheted, Minden lány velem együtt nevethet.",
    category: "VICCES"
  },
  {
    vers: "Meglocsollak sms-sel, Nem fogok tökölni, Neked nem kell hajat mosni, Nekem nem kell kölni!",
    category: "VICCES"
  },
  {
    vers: "Van nálam egy kis pacsuli Leloccsintom magát, Ha egy kicsi mázlija van, Túléli a szagát.",
    category: "VICCES"
  },
  { vers: "Tele van a hajad kosszal, meglocsollak domestossal!", category: "VICCES" },
  {
    vers: "Korán reggel ébredtem, locsolkodni kérem, Hogy mindenkihez eljutok, azt erősen kétlem. Tűnődtem én, hogy gyalog menjek vagy fussak, Autó mellett döntöttem, hogy mindenhova eljussak, Voltam már vagy 100 helyen, így lettem én spicces, Ha elkapnak a rendőrök, az nem lesz olyan vicces!",
    category: "VICCES"
  },
  {
    vers: "Én verset nem tudok, Azt mondják a kicsik, Én csak azért jöttem, Hogy igyak egy kicsit.",
    category: "VICCES"
  },
  {
    vers: "Locsolóvers ide vagy oda, Nem mondok már évek óta. Kölnivizem előveszem, A tojást zsebre teszem. Szabad-e locsolni?",
    category: "VICCES"
  },
  {
    vers: "Kék erdőben jártam, Zöld ibolyát láttam, Felfordult a világ velem, De azért még jó a kedvem, Kölnivizem nagyon csodás, Ide veled piros tojás! Szabad-e locsolkodni?",
    category: "VICCES"
  },
  {
    vers: "Odakint az utcán azt mondják a nagyok, hogy ebben a házban hervadnak a csajok. Én is, mint az apám, szeretem a nőket, s jöttem hát azonnal meglocsolni őket! Szabad-e locsolni?",
    category: "VICCES"
  },
  { vers: "Zöld erdőben jártam, Elfáradt a lábam, Talpam megdagadt, Locsold meg magadat!", category: "VICCES" },
  { vers: "Nem kell tovább spórolni, megjött Gyula locsolni!", category: "VICCES" },
  { vers: "Idén nem veszem ki a kölnit a zsebemből, Mégis hogyan locsolkodnék másfél méterről?", category: "VICCES" },
  { vers: "Idén verset küldök a lányoknak fotelből, Nem tudok locsolkodni másfél méterről!", category: "VICCES" },
  { vers: "Zúg a traktor, szánt az eke, Elvtársnő, locsolhatok-e?", category: "VICCES" },
  { vers: "Idegosztályon a helyem, meglocsollak, kedves nejem!", category: "VICCES" },
  {
    vers: "Hideg szoba, üres gyomor, Tízméteres Urma szobor, Meglocsollak, hogy nőlj nagyra, A szobornál is magasabbra!",
    category: "VICCES"
  },
  {
    vers: "Te szép leány, minden legény álma, Aki megkapna téged, igencsak jóljárna! De most nem azért jöttem, hogy udvaroljak Néked, Inkább a locsolásért piros tojást kérek!",
    category: "ARANYOS"
  },
  {
    vers: "Csak oda megyek locsolkodni, ahol szívesen látnak, Ahol nyitva van az ajtaja a lányos háznak. Ebben a házban csak szép leányok élnek, A locsolásért a markomba, piros tojást kérek.",
    category: "ARANYOS"
  },
  {
    vers: "Hosszú locsolóverssel, nem akarlak untatni, Megkérdezem tiszta szívvel, Szabad-e locsolkodni?",
    category: "ARANYOS"
  },
  {
    vers: "Én apró gyerek vagyok, locsolkodni akarok. Van tojás, vagy nincs, jó lesz a forint.",
    category: "ARANYOS"
  },
  {
    vers: "Én csak erre jártam, egy szép kislányt megláttam. Piros tojás, fehér nyuszi, szabad-e meglocsolni?",
    category: "ARANYOS"
  },
  {
    vers: "Nesze hát a rózsavíz, Gyöngyöm, gyöngyvirágom! Hol a tojás, piros tojás? Tarisznyámba várom! Szabad-e locsolni?",
    category: "ARANYOS"
  },
  {
    vers: "Meglocsolnám rózsavízzel, hogyha előjönne, Akkor az a kicsi lány jaj de nagyot nőne. Megöntözlek gyorsan a harmat friss illatával, Teljen a talicskám sok szép piros tojással!",
    category: "ARANYOS"
  },
  {
    vers: "Van e háznak rózsabokra, Nyúljék élte sok napokra, Hogy virítson mint rózsaszál, Megöntözném: ennyiből áll, A kis kertész fáradsága, Piros tojás a váltsága.",
    category: "SZÉP"
  },
  {
    vers: "Patak mellett mentem, azt súgta egy harcsa: Van e háznál kislány, hogy az Isten tartsa. Meglocsolnám rózsavízzel, hogyha elôjönne, Akkor az a kicsi lány jaj de nagyot nône!",
    category: "ARANYOS"
  },
  {
    vers: "Húsvéti reggel kis nyuszi szalad, Zöld fűben ugrálva sebesen halad. Sok tojást kell vinnie, ez jár a fejében, Fut, hogy odaérjen mindenhova időben.",
    category: "ARANYOS"
  },
  {
    vers: "A lányok is kapnak csokitojást tőle, De a tiedet véletlen elszórta földre. Szerencsére megtaláltam gyorsan, Had locsoljalak meg nyomban!",
    category: "ARANYOS"
  },
  {
    vers: "Szépen kérem az apját, De még szebben az anyját: Adja elő a lányát, Hadd locsolom a haját! Hadd nőjön nagyra, Mint a csikó farka, Még annál is nagyobbra, Mint a Duna hossza. Szabad-e locsolni?",
    category: "ARANYOS"
  },
  {
    vers: "Én még kicsi vagyok, Verset ezért nem is tudok, De majd jönnek a nagyok, Aztán majd mondanak azok.",
    category: "ARANYOS"
  },
  { vers: "Piros tojás, fehér nyuszi, Locsolásért jár egy puszi.", category: "ARANYOS" },
  {
    vers: "Tessék hát rózsavíz, Gyöngyöm, gyöngyvirágom. Hol a tojás, piros tojás? Tarisznyámba várom!",
    category: "ARANYOS"
  },
  {
    vers: "Nyalka legény vagyok, Lányokhoz indulok. Mert ma minden lánynak Rózsavizet hozok. Megöntözem őket, Mint a virágokat, Nem venném lelkemre, Hogy elhervadjanak. Ám e fontos munkám Ingyen nem tehetem, Cserébe a hímestojást Sorra ide kérem.",
    category: "ARANYOS"
  },
  {
    vers: "Én kis kertész legény vagyok, Rózsavízzel locsolkodok. Úgy locsolom a lányokat, Mint kertész a virágokat.",
    category: "SZÉP&ARANYOS"
  },
  {
    vers: "Kerek erdőn jártam, Piros tojást láttam, Bárány húzta rengő kocsin, Mindjárt ideszálltam. Nesze hát rózsavíz, Gyöngyöm, gyöngyvirágom. Hol a tojás, piros tojás? Tarisznyámba várom!",
    category: "ARANYOS"
  },
  {
    vers: "Korán reggel útra keltem, Se nem ittam, se nem ettem. Tarisznya húzza a vállam, Térdig kopott már a lábam. Bejártam a fél világot, Láttam sok-sok szép virágot. A legszebbre most találtam, Hogy öntözzem, alig vártam.",
    category: "ARANYOS"
  },
  {
    vers: "Ákom-bákom, berkenye; Szagos húsvét reggele. Leöntjük a virágot, Visszük már a kalácsot.",
    category: "ARANYOS"
  },
  {
    vers: "Cserebura nádikó, Bújj elő te Nyuszikó! Adjál tojást eleget, Pirosat ám, de frisset!",
    category: "ARANYOS"
  },
  {
    vers: "Húsvét másodnapján régi szokás szerint Fogadják szívesen az öntözőlegényt. Én a legénységhez igen kicsi vagyok, De öntözőlegénynek mégis csak felcsapok. Minden esztendőben ilyenkor itt vagyok Ha a locsolásért pirostojást kapok.",
    category: "ARANYOS"
  },
  {
    vers: "Itt a húsvét, eljött végre A szép lányok örömére Mert a lányok szép virágok Illatos víz illik rájuk Kit húsvétkor nem locsolnak, Hervadt virág lesz már holnap. Ne fuss hát el, szép virágom, Locsolónak csók jár, három.",
    category: "ARANYOS"
  },
  {
    vers: "Kinyílott az aranyeső Én voltam ma a legelső, aki kora reggel locsolkodni kelt fel Minden szőke, barna lány, Mint a piros tulipán Virulva-viruljon Rózsapermet hulljon. Íme, itt a kölni Szabad-e locsolni?",
    category: "ARANYOS"
  },
  {
    vers: "Kinyílt az ibolya húsvét hajnalára, Csepegjél, rózsavíz erre a kislányra. Rózsavíztől, majd meglátod, szép és ügyes leszel, Ugye, kislány, a zsebembe piros tojást teszel?",
    category: "ARANYOS"
  },
  {
    vers: "Korán reggel felébredtem, messze-messze jártam, Tündérország kiskertjéből rózsavizet hoztam. Na, te kislány, megöntözlek, ma van húsvét napja, Tündököljön a két orcád, mint a piros rózsa. Az illatos rózsavíztől megnőnek a lányok, Zsebemben is elférnek a piros tojások.",
    category: "ARANYOS"
  },
  {
    vers: "E szép házba nyitottam, Nefelejcset találtam, Nem hagyhatom hervadni, Meg szabad-e locsolni?",
    category: "SZÉP&ARANYOS"
  },
  {
    vers: "Erdőn-mezőn nyitott szemmel, sok virágra lel az ember. Én most őket megöntözöm, a piros tojást megköszönöm! Szabad-e locsolni?",
    category: "SZÉP&ARANYOS"
  },
  {
    vers: "Jó reggelt, jó reggelt, kedves liliomszál, Megöntözlek rózsavízzel, hogy ne hervadozzál!",
    category: "SZÉP&ARANYOS"
  },
  {
    vers: "Vörös rózsa, fehér rózsa, Olyan szép vagy meglocsolva. Hervadsz, hervadsz kis virág, Szabad-e a locsolás?",
    category: "ARANYOS"
  },
  {
    vers: "Kelj fel párnádról szép ibolyavirág, Tekints ki az ablakon, milyen szép a világ. Megöntözlek gyorsan a harmat friss illatával, Teljen a talicskám sok szép piros tojással.",
    category: "SZÉP&ARANYOS"
  },
  { vers: "Trágyadombon él a bögöly, Meglocsollak, meg ne dögölj!", category: "VICCES" },
  { vers: "Büdös ez a kölni, Szabad-e fröcskölni?", category: "VICCES" },
  { vers: "Zöld erdőben jártam, Kék ibolyát láttam. El akart hervadni Szabad-e locsolni?", category: "SZÉP" },
  { vers: "Kerek erdő, templom, locsolok-e ? Nem 'tom.", category: "VICCES" }
];

const Kereso = () => {
  const [query, setQuery] = useState("");

  const filtered = query ? versek.find((v) => v.vers.toLowerCase().includes(query.toLowerCase())) : null;

  return (
    <div className="max-w-xl min-w-xl relative">
      <input
        type="text"
        placeholder="Keresés versben..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border-2 border-zinc-200 rounded-lg bg-black"
      />

      {filtered && (
        <div className="absolute bg-black rounded-lg border-zinc-200 py-1">
          <p
            className={`m-2 text-lg font-bold ${
              filtered.category === "SZÉP"
                ? "text-[#d181e6]"
                : filtered.category === "ARANYOS"
                ? "text-[#e6b981]"
                : filtered.category === "VICCES"
                ? "text-[#8197e6]"
                : "text-pink-400"
            }`}
          >
            {filtered.category}
          </p>
          <p className="whitespace-pre-line">{filtered.vers}</p>
        </div>
      )}
    </div>
  );
};

export default Kereso;
