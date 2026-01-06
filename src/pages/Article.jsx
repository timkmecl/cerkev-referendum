import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame } from 'lucide-react';
import Markdown from 'react-markdown';

const Article = () => {
  return (
    <div className="w-full">
      {/* 1. HERO HEADER WITH INTEGRATED TITLE */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-auto min-h-[450px] md:min-h-[600px] -mt-8 mb-12 overflow-hidden bg-slate-950 flex flex-col justify-end">
        
        {/* Background Image */}
        <img 
          src={`${import.meta.env.BASE_URL}assets/header.jpg`} 
          alt="Operacija Božja Volja Header" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-50"
        />
        
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
        
        {/* Integrated Title Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-12 md:pb-20">
            <div className="flex flex-col items-start">
                <p className="text-church-red font-bold uppercase text-xs tracking-[0.3em] mb-4 flex items-center gap-2">
                    <Flame className="h-4 w-4" /> ARHIV KAMPANJE
                </p>
                
                <h1 className="text-5xl md:text-6xl lg:text-6xl font-black text-white mb-6 tracking-tighter leading-[0.95] uppercase">
                    Operacija "Božje kraljestvo": <br/>
                    {/* shadow under text */}
                    <span className="text-church-red drop-shadow-[0_0_15px_rgba(0,0,0,0.9)]">Kako je Cerkev ugrabila referendum</span>
                </h1>
                
                <p className="text-md md:text-2xl text-slate-300 leading-snug font-serif italic max-w-3xl border-l-2 border-church-red pl-6">
                    Od groženj z izobčenjem in "hudičevih zakonov" do kršitev volilnega molka in "ljudi zveri". Analiza več sto župnijskih oznanil razkriva, da novembra 2025 s prižnic ni donela le božja beseda, temveč usklajena, logistično podprta in mestoma brutalna politična agitacija.
                </p>
            </div>
        </div>
      </div>

      {/* 2. ARTICLE CONTENT */}
      <div className="max-w-3xl mx-auto px-4">
        <article className="prose prose-stone lg:prose-lg prose-red">
          {/* <p className="lead font-serif text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">
            Nedelja, 23. november 2025. Ura je osem zjutraj. Slovenija se je prebudila v volilni molk. 
            Na televiziji in radiu ni političnih oglasov, plakati ob cestah so tihi opomniki kampanje... 
            A za debelimi zidovi cerkva po državi molk ne velja.
          </p> */}

          {/* <h3 className="text-2xl font-bold text-gray-900">Metodologija</h3> */}
          <p>
            S pomočjo naprednih orodij umetne inteligence smo sistematično pregledali digitalni odtis vseh župnij v Ljubljanski nadškofiji, Murskosoboški škofiji in Dekaniji Maribor. Algoritmi so prečesali na stotine spletnih strani, preko tisoč strani oznanil, glasil in drugih tiskovin ter na tisoče objav na Facebooku. Da bi zagotovili absolutno točnost, smo vsak zadetek ročno preverili. 
          </p>
          <p>
            Rezultat je baza podatkov s preko 100 župnijami in preko 500 konkretnimi primeri agitacije, ki dokazujejo, da ne gre za izolirane incidente, temveč za usklajeno operacijo. Rezultati so zbrani v spodnji bazi.
          </p>

          {/* Call to Action Box */}
          <div className="not-prose mt-16 p-8 md:p-12 bg-white shadow-2xl border border-gray-100 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 relative z-10 text-center">Razišči arhiv dokazov</h3>
            <p className="mb-8 text-gray-500 max-w-sm mx-auto relative z-10">
              Celotna baza 100+ župnij in 500+ konkretnih primerov agitacije.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link 
                to="/baza" 
                className="inline-flex items-center justify-center px-8 py-4 bg-church-red text-white font-bold rounded-lg hover:bg-red-800 transition shadow-lg shadow-red-900/20"
              >
                Seznam župnij <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/vsi-dokazi" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 border border-gray-200 font-bold rounded-lg hover:bg-gray-50 transition"
              >
                Vsi primeri
              </Link>
            </div>
          </div>
          <br />
          <Markdown>
            {
              `



Sledi pregled najpomembnejših taktik in strategij, ki jih je Cerkev uporabila v svoji kampanji za vplivanje na izid referenduma o zakonu o prostovljnem končanju življenja (ZPPKŽ) novembra 2025.

Izpostavljamo glavne kategorije: neposredno **nagovarjanje** vernikov, **čustveno nabita** opozorila, deljenje **propagandnega gradiva** in organizirani **dogodki v cerkvenih prostorih**. Vsaka kategorija vsebuje konkretne primere iz arhivov, ki ilustrirajo uporabljene taktike.

## 1. Neposredno nagovarjanje

Tukaj so zbrani primeri, kjer duhovniki (župniki) v oznanilih izstopijo iz standardiziranih besedil (pastirskih pisem z nagovori PROTI, ki se pojavijo v večini župnij) in **s svojimi besedami, v prvi osebi ali z uporabo svoje avtoritete** neposredno nagovarjajo, prosijo ali celo zahtevajo določeno glasovanje.

### **Najostrejši neposredni ukazi in grožnje**

*   **Župnija Trata - Gorenja vas:**
    Župnik uporabi izjemno močan glagol »zahtevam«:
    *   »Na tem mestu vas prosim in - ne zamerite mi - **zahtevam**, da se skupaj z menoj, borite za človeka vredno življenje [...] Tisti, ki zagovarja ta zakon, ni na pravi strani zgodovine. [...] Molimo za zdravo pamet in pojdimo na volišča!«

*   **Župnija Homec:**
    Župnik neposredno grozi z izključitvijo iz Cerkve:
    *   »A kot vaš pastir in služabnik Resnice sem dolžan povabiti in pozvati [...] Verjamem in si celo predstavljam, da se bodo našli tudi ljudje, ki se bodo razglašali za katolike, pa bodo zakon podprli. **V svoji duhovniški in očetovski skrbi jih opominjam, da se bodo izključili iz občestva Cerkve. In to polagam na vašo vest.**«

*   **Župnija Velesovo:**
    Kratek in jasen ukaz:
    *   »Slovenski škofje **in jaz vaš župnik : na referendum vsi : PROTI**«

### **Osebna pričevanja in pozivi župnikov ("Jaz bom glasoval proti")**

*   **Župnija Borovnica:**
    *   »JAZ BOM GLASOVAL PROTI.« (Zapisano z velikimi tiskanimi črkami).

*   **Župnija Ljubljana - Šentvid:**
    Župnik deli osebno refleksijo in odločitev:
    *   »Pred referendumom razmišljam, ko se kot duhovnik srečujem s pričevanji [...] **Ne, jaz sem odločno PROTI.** Ko sosed ali mladostnica želi končati svoje življenje, kakšno pomoč mu boš ponudil ti?« (Podpisano: župnik).

*   **Župnija Besnica:**
    Župnik na Facebooku objavi fotografijo svoje glasovnice:
    *   »Sem šel predčasno danes.«

*   **Župnija Dol pri Ljubljani:**
    Župnik izraža zaupanje, a hkrati opozarja:
    *   »Naša krajevna Cerkev nas spodbuja, da se udeležimo referenduma in glasujemo proti. **Jaz zaupam našim faranom**, da boste šli na referendum in tudi prav glasovali. **Pametnemu dovolj!!!**«

*   **Župnija Moravče:**
    Jože Kerin se podpiše pod osebni poziv:
    *   »Danes je dan izbire. [...] Gospod pa predme in predte, pred nas, postavlja življenje in smrt. Izbiro! Mene, tebe, nas vabi! [...] Zato izberi življenje!«

### **Pozivi k aktivizmu in mobilizaciji drugih**

*   **Župnija Smlednik:**
    Župnik poziva k aktivni kampanji vernikov:
    *   »Zato je nujno, da vsi naredimo vse, kar lahko, da na referendumu zmaga življenje [...] **Ne bodite tiho**, ko je govor o tej temi. Ozaveščajte! Bodite vztrajni! **Naredite svoj načrt, kako boste na referendum pripeljali čim več ljudi.**«

*   **Župnija Domžale:**
    Neposredno navodilo glede propagandnega materiala:
    *   »Vzemite zgibanke domov in **jih dajte tudi tistim, ki razmišljajo drugače**.«

*   **Župnija Stična:**
    Podobno navodilo:
    *   »Lahko jih [letake] vzamete več in **daste še tistim, ki ne pridejo k sveti maši** ob nedeljah.«

### **Moralni pritisk in sklicevanje na vest**

*   **Župnija Dobrepolje - Videm:**
    Pritisk na lokalno identiteto in vest:
    *   »**Dobrepoljci ste pametni ljudje**, zato vam ni treba posebej priporočati, da na referendumu [...] glasujemo proti usmrtitvi. [...] Bog varuj vse, da bi imeli na vesti, da smo bili krivi katere koli smrti.«

*   **Župnija Kamnica:**
    Župnik opredeli zakon kot satanski:
    *   »Kar pa je **zame kot kristjana in duhovnika najhujše**, da ta zakon potepta 5. božjo zapoved [...] Ta zakon je **navdihnjen od satana**, ker hoče pod krinko pomoči uničevati ljubezen do življenja [...] Zato vas vabim, da bi se pridružili verigi molitve...«

*   **Župnija Tomišelj:**
    Čustveni pritisk s podobo osebne smrti:
    *   »Preden obkrožite, pomislite na to, da boste sami nekoč bolni in nemočni v postelji in **nekdo vas bo ubil, čeprav bi še radi živeli**. In pa, spomnite se, da ste kristjani.«

*   **Župnija Ihan:**
    *   »Danes je referendum o potrditvi krivičnega zakona. **Ne pozabite na svojo dolžnost!**« (med volilnim molkom) in »Vabim postivce [...] da bi izbrali življenje in to tudi povedali oblastnikom, ki bi vse reševali le s pobijanjem...«

*   **Župnija Bloke:**
    Župnik Simon spodbuja in pritiska:
    *   »Danes je referendum. Ne pozabimo na to našo državljansko in **tudi krščansko dolžnost**.« (med volilnim molkom), že pred tem pa »Verjamem, da imamo dovolj poguma, srca in razuma, da zakon zavrnemo.« in »Vsak kristjan z volilno pravico ima **moralno dolžnost** udeležiti referenduma...«

*   **Župnija Selca:**
    *   »Mislim, da ni potrebno poudariti kako potrebno je iti in kako glasovati. Kot lahko vsak dan bolj vidimo in slišimo, kako se zlo oglaša in bojuje proti dobremu...«

*   **Župnija Rovte:**
    *   »Zato vas vabim, da v nedeljo, 23. novembra, glasujete proti zakonu o zastrupitvi bolnikov [...] Jernej, župnik«

---
## 2. Čustveno nabita in zavajajoča opozorila

Iz analiziranih dokumentov je razvidno, da je Cerkev v kampanji uporabila izjemno močan čustven naboj, ki je temeljil predvsem na **strahu** (pred umorom, prisilo, zapuščenostjo) in **občutku krivde**.

Tu so najbolj čustvena in pretresljiva opozorila o posledicah zakona:

### **Neposreden strah pred umorom in prisilo**
Najbolj drastična opozorila vernikom slikajo prihodnost, v kateri ne bodo varni pred lastnimi zdravniki ali celo otroki.

*   **Župnija Tomišelj:**
    *   »Preden obkrožite, pomislite na to, da boste sami nekoč bolni in nemočni v postelji in **nekdo vas bo ubil, čeprav bi še radi živeli**.«
*   **Župnija Ljubljana – Šentvid:**
    *   »Ali bomo [...] sedaj izglasovali še, da **v prihodnosti otroci umorijo starše?**«
*   **Župnija Rovte (in druge, ki delijo gradiva A. Primca):**
    *   »**Hočete biti zastrupljeni?** Hočete, da na vas pritiskajo in vas silijo v smrt? Hočete, da zlorabijo vašo stisko?«
*   **Univerzitetna župnija Maribor (zgodba 75-letne Marte):**
    *   Objavili so zgodbo prestrašene gospe, ki jo hčerka tolaži: **»Ne, ne. Nikakor! Ne bomo te pustili ubiti.«** Oznanilo igra na strah starejših, da se jih bodo mlajši želeli znebiti.

### **Občutek odvečnosti in "družbenega odpadka"**
Oznanila pogosto uporabljajo čustveno izsiljevanje z idejo, da zakon sporoča bolnim, da so "strošek" in "breme".

*   **Župnija Ljubljana – Vič (pismo invalida):**
    *   »Tako da nekako dvomim da se gre za trpeče, **gre se zato da se jih lahko znebimo če so NAM breme** ... Včasih smo rekli »za dežjem posije sonce«, no od sedaj bomo rekli »med dežjem te zadane evtanazija« ... **Sonca in svetlobe v bistvu ne rabimo več.**«
*   **Župnija Rakovnik (zdravnica J. Poličnik):**
    *   Opozarja na zastrupitveni mobing in občutek, da mora človek umreti, da ne bo **»fizično in finančno breme svojcem ali družbi«**.

### **Dehumanizacija: Človek postane zver**
Uporaba bibličnih in apokaliptičnih prispodob za opis moralnega propada družbe.

*   **Župnija Bakovci:**
    *   »...da tako **človek človeku ne bo več človek, ampak zver**, ko se bo namreč on sam tudi po zakonu lahko ponižal na raven zveri...«
*   **Župnija Moravče:**
    *   »V tem našem svetu lagodja [...] so nekateri zatavali v tolikšno temo... **Uzakonili so smrt, umor**, onečastili so svetost življenja...«

### **Zdravnik kot krvnik**
Popolna sprememba percepcije zdravniškega poklica z namenom vzbujanja nezaupanja v medicinsko osebje, če bo zakon sprejet.

*   **Župnija Ljubljana – Rakovnik:**
    *   »Temeljno zaupanje v odnosu zdravnik–pacient se izgubi, **zdravnik postane krvnik**.«
*   **Župnija Bloke & Kokrica (in številne druge):**
    *   Sistematična uporaba izraza **»zakon o zastrupitvi bolnikov«** namesto uradnega imena zakona, kar vzbuja podobo nasilne in boleče smrti s strupom namesto medicinske pomoči.

### **Narodna poguba**
Opozorila, da bo sprejetje zakona pomenilo konec slovenskega naroda in civilizacije.

*   **Župnija Trzin:**
    *   »**Narod si bo pisal sodbo sam.** Ne frak mu je ne bo in ne talar.« (Namigovanje na neizogiben propad naroda).
*   **Župnija Domžale:**
    *   »Družba, ki bi zastrupljala starejše in bolne, ne bo dolgo živela [...] in **nima prihodnosti**. Takšne družine in narod **ne bodo imeli Božjega blagoslova**.«
*  **Župnija Smlednik:**
    *   Naša dolžnost je, da v tem prelomnem času častno **branimo naše bolnike, tisočletno civilizacijo**, ki temelji na zapovedi: »Ne ubijaj«!, ter vero.


---    
## 3. Deljenje letakov in drugega tiskanega propagandnega gradiva

Najpogosteje se omenja **[zgibanka, ki so jo pripravili zdravniki](https://katoliska-cerkev.si/media/datoteke/Zdravniki%20proti%20zakonu.pdf)** in **[zloženka z molitvijo za uspeh referendumske pobude PROTI](https://portal.pridi.com/wp-content/uploads/2025/10/Podobica-Referendum-2025-3.pdf)**, pogosto pa duhovniki vernike izrecno pozivajo, naj gradivo **odnesejo domov in ga dajo tudi tistim, ki ne hodijo v cerkev**.

### **Osrednjeslovenska regija**

*   **Domžale:**
    *   *"Na razpolago imate [...] **zgibanko, ki so jo pripravili različni zdravniki** in kjer pojasnjujejo, kaj vse bi sprejetje zakona [...] potegnilo za seboj."*
    *   Poziv k širjenju: **"Vzemite zgibanke domov in jih dajte tudi tistim, ki razmišljajo drugače."**
    *   Omenjajo tudi: *"Na mizici pod korom je **še nekaj gradiva o zakonu**... Vzemite, preberite in se informirajte."*

*   **Stična:**
    *   *"Zadaj na polici za tisk imate **letak, ki so ga o referendumu pripravili slovenski zdravniki**."*
    *   Poziv k širjenju: **"Vzemite si letake na domov in jih preberite. Lahko jih vzamete več in daste še tistim, ki ne pridejo k sveti maši ob nedeljah."**

*   **Vodice:**
    *   *"Na razpolago so **letaki, kjer zdravniki utemeljujejo**, zakaj naj glasujemo PROTI zakonu o asistiranem samomoru."*

*   **Šmartno pri Litiji:**
    *   *"**Pri izhodu boste prejeli letak**, s katerim nas zdravniki prosijo, da v nedeljo, 23. novembra, na referendumu glasujemo PROTI."*

### **Notranjska in Gorenjska**

*   **Planina pri Rakeku:**
    *   *"**Ob izhodu boste prejeli zgibanko, ki so jo pripravili zdravniki** (skoraj vsi so za spoštovanje življenja)."*
    *   Poziv k širjenju: **"Morda boste to zgibanko lahko dali tudi tistim, ki ne hodijo v cerkev."**

*   **Grahovo:**
    *   *"Na polici zadaj: nova Družina, **brošure za referendum**."*

*   **Železniki:**
    *   *"Pod korom oz. po klopeh so na voljo **zgibanke z molitvijo** za izpolnitev Božje volje, ki jih lahko vzamete domov."*

*   **Preddvor:**
    *   *"Zadaj cerkve: **male zloženke z molitvijo** za uspeh referendumske pobude PROTI."*

### **Štajerska in Prekmurje**

*   **Gornja Radgona:**
    *   *"V cerkvi najdete **zloženko, ki so jo pripravili zdravniki** in izrazili svoje mnenje o nestrinjanjem s predlaganim zakonom o evtanaziji."*

*   **Maribor – Sv. Križ:**
    *   *"Na **lističu, ki ga boste dobili pri izhodu**, si skrbno preberite, zakaj so proti zakonu o evtanaziji in kakšne nevarnosti skriva."*



---
## 4. Organizirani dogodki v cerkvenih prostorih

Seznam dogodkov (okrogle mize, predavanja, pogovorni večeri), ki so bili organizirani **neposredno v župnijskih ali cerkvenih prostorih** (cerkve, župnišča, župnijske dvorane, pastoralni domovi, katoliški zavodi).

Dogodki, ki so jih župnije zgolj oglaševale, a so potekali v javnih/občinskih prostorih (npr. gasilski domovi, kulturni domovi, šole), **niso** vključeni v ta seznam.

### **Osrednjeslovenska regija (Ljubljana in okolica)**

*   **Župnija Domžale**
    *   **Lokacija:** Pevska učilnica.
    *   **Čas:** Sreda (datum ni točno definiran, verjetno pred 16. 11.), zvečer po sveti maši.
    *   **Gost:** Aleš Primc.
    *   **Naslov/Tema:** Demografski izzivi Slovenije in bližajoči se referendum.

*   **Župnija Ljubljana – Šiška & Ljubljana – Bežigrad**
    *   **Lokacija:** Frančiškova dvorana (Šiška).
    *   **Čas:** (Verjetno nedelja ali torek glede na kontekst oznanil), ob 19.45.
    *   **Gostje:** doc. dr. Tina Bregant (zdravnica), izr. prof. dr. Urh Grošelj (zdravnik, član KME).
    *   **Naslov:** *»Ko življenje postane pretežko, ga moramo najbolj varovati.«*
    *   **Kontekst:** Pogovorni večer povezuje Karolina Korenčan.

*   **Župnija Ljubljana – Polje**
    *   **Lokacija:** Župnijska dvorana.
    *   **Čas:** Torek, 11. november, ob 19.45.
    *   **Gost:** dr. Urh Grošelj (profesor pediatrije in medicinske etike).
    *   **Naslov:** *»Pasti novega zakona o pomoči pri samomoru.«*

*   **Župnija Ljubljana – Rakovnik**
    *   **Dogodek 1:**
        *   **Lokacija:** Dvorana Glasbene šole Rakovnik (cerkveni zavod).
        *   **Čas:** Sobota, 15. november, ob 19.30.
        *   **Gostje:** prof. dr. Christian Gostečnik (frančiškan, psiholog), prof. dr. Tadej Battelino (zdravnik).
        *   **Naslov:** *»Spoštovanje trpljenja in življenja.«*
    *   **Dogodek 2:**
        *   **Lokacija:** Rotunda SMC (Salezijanski mladinski center).
        *   **Čas:** Nedelja, 16. november, ob 10.30 (po maši).
        *   **Gostje:** s. Emanuela Žerdin (Hospic), Peter Pučnik SDB (duhovnik), dr. Urh Grošelj.
        *   **Naslov:** Nedeljska kava in pogovorno omizje.

*   **Župnija Ljubljana – Sv. Jakob**
    *   **Lokacija:** Skavtska hiša.
    *   **Čas:** Ponedeljek, 10. november, ob 19.00.
    *   **Gostje:** dr. Benjamin Lah (zdravnik), dr. Gabriel Kavčič (moralni teolog), s. Emanuela Žerdin.
    *   **Naslov:** *»Življenje je dar.«*

*   **Župnija Ljubljana – Sv. Križ (Žale)**
    *   **Lokacija:** Veroučne učilnice.
    *   **Čas:** Četrtek, 20. november, ob 17.15.
    *   **Gost:** dr. Roman Globokar (moralni teolog).
    *   **Naslov:** *»Predte polagam življenje in smrt. Izberi torej – življenje!«*

*   **Župnija Ljubljana – Šentvid**
    *   **Lokacija:** Zavod sv. Stanislava (prvotno napovedano v Domu sv. Vida).
    *   **Čas:** Torek, 18. november, ob 19.00.
    *   **Gostje:** Tatjana Fink, dr. Urh Grošelj, p. dr. Ivan Platovnjak, dr. Jernej Letnar Černič.
    *   **Naslov:** *»O mnogih pasteh asistiranega samomora.«*
    *   **Kontekst:** Javna radijska oddaja Radia Ognjišče.

*   **Župnija Vodice**
    *   **Lokacija:** Pastoralni dom v Vodicah.
    *   **Čas:** Torek, 11. november, ob 18.30.
    *   **Gostje:** dr. Milan Krek (zdravnik), Nejc Povirk (društvo Usidrani).
    *   **Naslov:** *»Tako imenovana "pravica umreti" se hitro lahko spremeni v dolžnost umreti.«*

*   **Župnija Brezovica (dogodek na Vrhniki)**
    *   **Lokacija:** Bela dvorana župnijskega vrtca na Vrhniki.
    *   **Čas:** Sreda, 12. november, ob 18.00.
    *   **Gostje:** dr. Marija Vegelj Pirc, dr. France Cukjati.
    *   **Naslov:** *»Pogovorno omizje o evtanaziji.«*

### **Gorenjska regija**

*   **Župnija Kranj – Šmartin / Drulovka / Breg**
    *   **Lokacija:** Dvorana župnišča v Stražišču.
    *   **Čas:** Ponedeljek, 17. november, ob 19.00.
    *   **Gost:** dr. Anda Perdan (zdravnica).
    *   **Naslov:** *»Pomagajmo ljudem živeti, ne umreti.«*

*   **Župnija Stara Loka**
    *   **Lokacija:** Jurjeva dvorana (župnijska dvorana).
    *   **Čas:** Petek, 7. november, ob 19.00.
    *   **Gostje:** Meta Krajnc (zdravnica), prof. dr. Roman Globokar, prof. dr. Zvonka Zupanič Slavec.
    *   **Naslov:** *»Pomagajmo ljudem živeti, ne umreti.«*

### **Štajerska regija (Maribor)**

*   **Stolna župnija Maribor / Univerzitetna župnija / MB-Košaki**
    *   **Lokacija:** Slomškova dvorana (tudi imenovana Škofijska avla), Slomškov trg 20.
    *   **Čas:** Četrtek, 13. november, ob 17.00.
    *   **Gostje:** dr. Tina Bregant (zdravnica), dr. Andrej Bergauer (kirurg), dr. Gregor Prosen (urgentni zdravnik), dr. Ivan Štuhec (teolog).
    *   **Naslov:** *»Iskreno o evtanaziji.«*

*   **Župnija Maribor – sv. Jožef**
    *   **Lokacija:** Dvorana župnišča.
    *   **Čas:** Torek, 18. november, ob 18.00.
    *   **Gost:** dr. Boštjan Mlakar (kirurg).
    *   **Naslov:** *»Rad živim.«*

### **Notranjska / Zasavje / Dolenjska**

*   **Župnija Stari trg pri Ložu**
    *   **Lokacija:** Dvorana kaplanije.
    *   **Čas:** Četrtek, 6. november, ob 18.30.
    *   **Gost:** dr. Gabrijel Kavčič (moralni teolog).
    *   **Naslov:** *»Predstavitev razlogov za krščansko zavračanje evtanazije.«*

*   **Župnija Šmartno pri Litiji (in Zagorje ob Savi)**
    *   **Lokacija:** Župnijski dom na Izlakah (Jurijev dom).
    *   **Čas:** Nedelja, 16. november, ob 15.00.
    *   **Gost:** dr. Roman Globokar.
    *   **Naslov:** *»Sodobni izzivi za bioetiko.«*

`
            }
          </Markdown>
        </article>
      </div>

      <div className="h-24"></div>
    </div>
  );
};

export default Article;