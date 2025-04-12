// Startsprache setzen (Standard: Deutsch)
let currentLanguage = 'de';

// Übersetzungen
const translations = {
  de: {
    "countdown-title": "Bis zu unserem großen Tag",
    "lang-toggle": "PL",
    "title-Einladung": "Einladung",
    "title-Location": "Location",
    "title-Zeitplan":"Tagesablauf",
    "title-Übernachtung": "Übernachtungsmöglichkeit",
    "title-Dress": "Dress Code",
    "title-Antwort": "Antwort",
    "title-Galerie": "Galerie",
    "title-Traditionen": "Traditionen",
    "title-Geschenke": "Geschenke",
    "title-Geschichte": "Unsere Geschichte",
    "text-Einladung": "endlich ist es soweit – wir sagen Ja! Wir freuen uns riesig, diesen besonderen Tag mit Euch zu feiern und laden Euch herzlich zu unserer Hochzeit ein. Lasst uns gemeinsam lachen, tanzen und unvergessliche Erinnerungen schaffen! Bitte gebt uns bis zum 30.04.2025 eine Rückmeldung, ob Ihr mit dabei seid. Wir freuen uns auf Euch!.",
    "title-text-Einladung": "Liebe Familie und Freunde,",
    "daTum": "31. Mai 2025",
    "church": "Kirche",
    "church-lok": "Kirche St. Martinus Linnich",
    "parking": "Parken:",
    "text-park-church": "Am besten parkt Ihr am Rathaus oder auf dem Parkplatz beim Aldi in Linnich. Von dort sind es nur etwa 400 Meter bzw. 5 Minuten zu Fuß bis zur Kirche.",
    "party": "Feier",
    "text-park-party": "Großer Parkplatz vor Ort. Es ist möglich ein Shuttle-Service zu organisieren. Nimmt dafür Konatk mit uns auf.",
    "Hochzeit":"Trauung",
    "Sekt":"Sektempfang",
    "Mittagessen":"Mittagessen",
    "party-ort":"Parkrestaurant Werden, Baesweiler",
    "Sekt-Ort":"Vor der Kirche",
    "kuchen":"Kaffee & Kuchen",
    "Tanz":"Eröffnungstanz & Party",
    "abendessen":"Abendessen",
    "Strauß":"Brautstraußwurf",
    "Ende":"Schicht im Schacht",
    "Alina": "Hotel Alina, Aldenhoven",
    "Alina-Adresse": "Landstraße 4, 52457 Aldenhoven",
    "Alina-Text":"Etwa 6 km von der Location entfernt befindet sich ein Hotel. Nach der Trauung kann dort Euer Fahrzeug abgestellt werden. Wir organisieren einen Shuttle-Service zur Location – nehmt dafür bitte rechtzeitig Kontakt mit uns auf.",
    "Alina-Preis": "ab 65€ pro Nacht",
    "HIB": "HIB Hotel, Baesweiler",
    "HIB-Adresse": "Kückstrasse 66, 52499 Baesweiler",
    "HIB-Text": "Etwa 2 km von der Location entfernt befindet sich ein weiteres Hotel. Auch von dort kann ein Shuttle-Service organisiert werden – meldet Euch einfach bei uns!",
    "HIB-Preis": "Ab 120€ pro Nacht",
    "Kennenlernen": "Wie wir uns kennengelernt haben",
    "Kennenlernen-text": "Als wir uns das erste Mal begegneten, waren wir noch jung – zwei Funken in der Welt der Feuerwehr. Zwischen Übungen und Einsätzen, zwischen Wasserschläuchen und Feuerschein, kreuzten sich unsere Wege immer wieder. Doch damals waren wir nur ein Teil derselben Geschichte, ohne zu wissen, dass unsere Kapitel eines Tages miteinander verschmelzen würden. Die Jahre vergingen, und das Leben führte uns auf getrennte Pfade. Erinnerungen verblassten, unsere Wege trennten sich, und eine lange Zeit sahen wir uns nicht mehr. Doch tief in uns blieb etwas bestehen – ein unausgesprochenes Band, das weder Zeit noch Distanz lösen konnte. Dann, nach all den Jahren, standen wir uns plötzlich wieder gegenüber. Ein Blick, ein Moment – und alles war anders. Was wir einst nicht sahen, trat nun in strahlendem Licht hervor: deine Stärke, dein Verstand, dein Herz. Diesmal wussten wir, dass wir zusammengehören. Aus den Funken von damals war eine Flamme geworden – eine, die bis heute brennt. Nun Feuer und Flamme.",
    "Antrag": "Der Antrag",
    "Antrag-text": "Unsere Reise war geprägt von besonderen Momenten – von Erinnerungen, die sich tief in unser Herz eingegraben haben. Sieben Jahre lang haben wir gemeinsam Höhen erklommen und Tiefen durchstanden, uns gestärkt, geliebt und immer wieder gefunden. Es war an der Zeit, all das zu feiern – auf eine Weise, die unserer Liebe gerecht wird. Mit sieben Dates tauchten wir noch einmal in unsere schönsten Erlebnisse ein. Jeder dieser Tage erinnerte uns an ein Kapitel unserer Geschichte, an die kleinen und großen Augenblicke, die uns unzertrennlich machten. Sieben Liebesbriefe folgten – Worte, die festhielten, was manchmal zwischen den Zeilen des Alltags verloren geht. Jeder Brief betonte eine Eigenschaft, die das Herz des anderen so einzigartig macht. Und dann waren da noch die sieben Überraschungen – kleine Gesten voller Liebe, Lächeln, Staunen und Glück. Jede einzelne war ein Versprechen für die Zukunft, ein Zeichen dafür, dass unser Weg immer weitergeht, dass wir immer wieder neue Gründe finden werden, einander zu lieben. Am Ende dieser Reise blieb nur noch eine Frage. Eine Frage, die längst beantwortet war – nicht durch Worte, sondern durch alles, was uns verbindet. Denn nach sieben Jahren, sieben Dates, sieben Briefen und sieben Überraschungen gab es nur noch einen Schritt zu gehen: den Schritt, der uns für immer vereint.",
    "Trauzeugen": "Unsere Trauzeugen",
    "Trauzeugen-Text":"Für Überraschungen und Spiele wendet euch bitte an unsere Trauzeugen.",
    "Geschenke-text": "Wenn ihr uns etwas mitbringen möchtet, freuen wir uns sehr über einen Beitrag in unser Zukunfts-Sparschwein; so könnt ihr helfen, unsere Träume wahr werden zu lassen. Wer lieber etwas Persönliches schenken möchte, kann sich gerne mit unseren Trauzeug:innen in Verbindung setzen – sie stehen mit Rat und Tat zur Seite. Wir freuen uns riesig auf euch!",
    "Brauch": "Bräuche & Traditionen",
    "Kuss": "Kuss-Tradition",
    "Kuss-Text": "In Polen ruft man <Gorzko!> [ɡoschko] (Bitter), bis sich das Brautpaar küsst. Herzliche Einladung mitzurufen, um den Moment mit einem Kuss zu versüßen",
    "Strauß-Text": "Die alte Tradition des Brautstraußwurfs besagt, dass die Person, die den Strauß fängt, als Nächstes heiraten wird.",
    "Jacket": "Jackett",
    "Jacket-Text": "Sobald der Bräutigam das Jacket auszieht, dürfen alle das Jacket ausziehen.",
    "Tortenschnitt": "Tortenanschnitt",
    "Tortenschnitt-Text": "Der Kuchenanschnitt symbolisiert den ersten gemeinsamen Akt als Ehepaar. Traditionell halten beide gemeinsam das Messer – wer die Hand oben hat, wird in der Ehe <die Hosen anhaben>. Danach wird sich mit dem Kuchen gegenseitige gefüttert. Es zeigt, dass sich das Paar künftig umeinander kümmern wird.",
    "Pausen": "Tanzpausen",
    "Pausen-Text": "Es wird nicht dauerhaft getanzt. Regelmäßig werden Musikpausen eingelegt, um gemeinsam ein paar Kurze zu trinken. Wir erhoffen uns dadurch mehr Action auf der Tanzfläche.",
    "Code-Text": "Besondere Tage verdienen besondere Kleidung. Wir freuen uns sehr, diesen besonderen Moment mit Euch zu teilen und wünschen uns, dass Ihr diesen Tag auch in Eurem besten Outfit feiert. Bitte erscheint in semi-formeller Kleidung, die dem Anlass gerecht wird. Unser Farbkonzept lautet Himmel & Rubin – also verschiedene Blautöne und Burgunderrot. Ob als Outfit oder liebevolles Detail: Wenn ihr euch daran orientiert, liegt ihr genau richtig!",
    "Frauen": "Was bedeutet Semi Formal für Frauen:",
    "F-P1": "Elegante Kleider(knie-bodenlang), Jumpsuits oder Hosenanzüge",
    "F-P2": "Stoffe wie Chiffon, Seide, Satin oder fließende Viskose",
    "F-P3": "Keine zu freizügigen Schnitte, aber gerne feminin",
    "F-A1": "Kleid, Jumpsuit oder Hosenanzug in einem Blauton oder Burgunderrot",
    "F-A2": "Oder Accessoires wie Taschen, Schuhe, Ohrringe oder Haarbänder in Rubin oder Blautönen",
    "Acess": "Farbliche Umsetzung (Himmel & Rubin):",
    "Männer": "Was bedeutet Semi Formal für Männer",
    "M-P1": "Anzug oder Kombination aus Sakko und Stoffhose",
    "M-P2": "Stilvolles Hemd",
    "M-P3": "Krawatte oder Fliege optional, aber stilvoll",
    "M-A1": "Anzüge, Sakkos oder Hosen in unseren Farben",
    "M-A2": "Oder Accessoires wie Krawatte, Fliege, Einstecktuch, Socken oder Gürtel in Rubin oder Blautönen",
  
  },
  pl: {
    "countdown-title": "Do naszego wielkiego dnia",
    "lang-toggle": "DE",
    "title-Einladung": "Zaproszenie",
    "title-Location": "Lokalizacje",
    "title-Zeitplan":"Plan dnia",
    "title-Übernachtung": "Noclegi",
    "title-Dress": "Dress Code",
    "title-Antwort": "Odpowiedź",
    "title-Galerie": "Galeria",
    "title-Traditionen": "Tradycje",
    "title-Geschenke": "Prezenty",
    "title-Geschichte": "Nasza Historia",
    "text-Einladung": "W końcu nadszedł czas - mówimy tak! Jesteśmy bardzo szczęśliwi, że możemy świętować z Wami ten wyjątkowy dzień i serdecznie zapraszamy na nasz ślub. Śmiejmy się, tańczmy i twórzmy razem niezapomniane wspomnienia! Daj nam znać do 30.04.2025, czy do nas dołączysz.Z niecierpliwością czekamy na Ciebie!",
    "title-text-Einladung": "Drodga Rodzino i Przyjaciele,",
    "daTum": "31. Maj 2025",
    "church": "Kościół",
    "church-lok": "Kościół St. Martinus Linnich",
    "parking": "Parking:",
    "text-park-church": "Najlepiej zaparkować przy ratuszu lub na parkingu przy supermarkecie Aldi w Linnich. Stamtąd do kościoła jest tylko około 400 metrów lub 5 minut spacerem.",
    "party": "Przyjęcie",
    "text-park-party": "Duży parking na miejscu. Istnieje możliwość zorganizowania transferu. W tym celu należy skontaktować się z nami.",
    "Hochzeit":"Ślub",
    "Sekt":"Powitanie szampanem",
    "Mittagessen":"Obiad",
    "party-ort":"Parkrestaurant Werden, Baesweiler",
    "Sekt-Ort":"przed kościołem",
    "kuchen":"Kawa i ciasto",
    "Tanz":"Pierwszy taniec i zabawa",
    "abendessen":"Kolacja",
    "Strauß":"Rzut bukietem",
    "Ende":"Po zawodach",
    "Alina": "Hotel Alina, Aldenhoven",
    "Alina-Adresse": "Landstraße 4, 52457 Aldenhoven",
    "Alina-Text":"W odległości około 6 km od obiektu znajduje się hotel. Można tam zaparkować samochód po ceremonii. Możemy zorganizować transport na miejsce - prosimy o kontakt z odpowiednim wyprzedzeniem.",
    "Alina-Preis": "od 65€ za noc",
    "HIB": "HIB Hotel, Baesweiler",
    "HIB-Adresse": "Kückstrasse 66, 52499 Baesweiler",
    "HIB-Text": "W odległości około 2 km od obiektu znajduje się inny hotel. Stamtąd również można zorganizować transfer - wystarczy się z nami skontaktować!",
    "HIB-Preis": "Od 120€ za noc",
    "Kennenlernen": "Jak się poznaliśmy",
    "Kennenlernen-text": "Kiedy spotkaliśmy się po raz pierwszy, byliśmy jeszcze młodzi - dwie iskierki w świecie straży pożarnej. Pomiędzy ćwiczeniami i wyjazdami, pomiędzy wężami z wodą i ogniem, nasze drogi wciąż się krzyżowały. Ale wtedy byliśmy tylko częścią tej samej historii, nie zdając sobie sprawy, że nasze rozdziały pewnego dnia się połączą. Lata mijały, a życie prowadziło nas osobnymi ścieżkami. Wspomnienia wyblakły, nasze drogi się rozeszły i nie widzieliśmy się ponownie przez długi czas. Ale głęboko w nas coś pozostało - niewypowiedziana więź, której ani czas, ani odległość nie mogły przerwać. Potem, po tych wszystkich latach, nagle znów znaleźliśmy się twarzą w twarz. Jedno spojrzenie, jedna chwila - i wszystko było inne. To, czego kiedyś nie widzieliśmy, teraz pojawiło się w promiennym świetle: twoja siła, twój umysł, twoje serce. Tym razem wiedzieliśmy, że należymy do siebie. Iskry z tamtego czasu stały się płomieniem, który płonie do dziś. Teraz ogień i płomień.",
    "Antrag": "Oświadczyny",
    "Antrag-text": "Nasza podróż charakteryzowała się wyjątkowymi chwilami - wspomnieniami, które są głęboko wyryte w naszych sercach. Przez siedem lat razem wspinaliśmy się na wyżyny i znosiliśmy upadki, wzmacnialiśmy się nawzajem, kochaliśmy się i odnajdywaliśmy na nowo. Nadszedł czas, aby to wszystko uczcić - w sposób, który oddaje sprawiedliwość naszej miłości. W siedmiu dniach ponownie zanurzyliśmy się w naszych ulubionych doświadczeniach. Każdy z tych dni przypominał nam o jednym z rozdziałów naszej historii, o małych i dużych chwilach, które uczyniły nas nierozłącznymi. Następnie siedem listów miłosnych - słowa, które uchwyciły to, co czasami gubi się między wierszami codziennego życia. Każdy list podkreślał cechę, która sprawia, że serce drugiej osoby jest tak wyjątkowe. A potem było siedem niespodzianek - małe gesty pełne miłości, uśmiechu, zdumienia i szczęścia. Każdy z nich był obietnicą na przyszłość, znakiem, że nasza podróż zawsze będzie trwać, że zawsze znajdziemy nowe powody, by się kochać. Pod koniec tej podróży pozostało tylko jedno pytanie. Pytanie, na które już dawno udzielono odpowiedzi - nie słowami, ale wszystkim, co nas łączy. Ponieważ po siedmiu latach, siedmiu datach, siedmiu listach i siedmiu niespodziankach pozostał tylko jeden krok do zrobienia: krok, który połączy nas na zawsze.",
    "Trauzeugen": "Nasi świadkowie",
    "Trauzeugen-Text":"W sprawie niespodzianek i gier prosimy o kontakt z naszymi świadkami.",
    "Geschenke-text": "Jeśli chciałbyś nam coś przynieść, bylibyśmy bardzo szczęśliwi, gdybyś otrzymał datek do naszej przyszłej skarbonki; w ten sposób możesz pomóc spełnić nasze marzenia. Jeśli wolisz podarować coś spersonalizowanego, skontaktuj się z naszymi świadkami - chętnie Ci pomogą i doradzą. Z niecierpliwością czekamy na Ciebie!",
    "Brauch": "Zwyczaje i tradycje",
    "Kuss": "Tradycja pocałunku",
    "Kuss-Text": "Krzyczymy <Gorzko!>, aby para młoda mogli osłodzić ten moment pocałunkiem.",
    "Strauß-Text": "Stara tradycja rzucania bukietem ślubnym mówi, że osoba, która złapie bukiet, jako następna wyjdzie za mąż.",
    "Jacket": "Marynarka",
    "Jacket-Text": "Dopiero gdy pan młody zdejmie marynarkę, wszyscy mogą ją zdjąć.",
    "Tortenschnitt": "Cięcie tortu",
    "Tortenschnitt-Text": "Krojenie tortu symbolizuje pierwszy wspólny akt małżeński. Zgodnie z tradycją, oboje trzymają nóż razem - ktokolwiek ma rękę na górze, będzie „nosił spodnie” w małżeństwie. Następnie karmią się nawzajem ciastem. Pokazuje to, że para będzie dbać o siebie nawzajem w przyszłości.",
    "Pausen": "Przerwy",
    "Pausen-Text": "Nie ma ciągłego tańca. Są regularne przerwy w muzyce, aby wypić razem kilka kieliszków. Mamy nadzieję, że doprowadzi to do większej aktywności na parkiecie.",
    "Code-Text": "Wyjątkowe dni zasługują na wyjątkowe ubrania. Cieszymy się, że możemy dzielić z Tobą ten wyjątkowy moment i mamy nadzieję, że będziesz świętować ten dzień w swoim najlepszym stroju. Prosimy o przybycie w półformalnym stroju, który pasuje do okazji. Nasza koncepcja kolorystyczna to niebo i rubin - różne odcienie niebieskiego i bordowego. Czy to jako strój, czy jako piękny detal: Jeśli zorientujesz się na to, masz dokładnie rację!",
    "Frauen": "Co oznacza Semi Formal dla kobiet",
    "F-P1": "Eleganckie sukienki (do kolan), kombinezony lub garnitury ze spodniami",
    "F-P2": "Tkaniny takie jak szyfon, jedwab, satyna lub lejąca wiskoza",
    "F-P3": "Żadnych zbyt odsłaniających fasonów, ale jak najbardziej kobiece",
    "F-A1": "Sukienka, kombinezon lub garnitur ze spodniami w odcieniu niebieskiego lub bordowego",
    "F-A2": "Lub Akcesoria takie jak torebki, buty, kolczyki lub opaski do włosów w kolorze rubinowym lub odcieniach niebieskiego",
    "Acess": "Wdrożenie kolorów (niebo i rubin):",
    "Männer": "Co oznacza Semi Formal dla mężczyzn",
    "M-P1": "Garnitur lub połączenie marynarki i materiałowych spodni",
    "M-P2": "Stylowa koszula",
    "M-P3": "Krawat lub muszka opcjonalne, ale stylowe",
    "M-A1": "Garnitury, marynarki lub spodnie w naszych kolorach",
    "M-A2": "Lub dodatki takie jak krawat, muszka, chustka, skarpetki lub pasek w odcieniach rubinu lub niebieskiego"
}
};
// Funktion zum Rendern der Sprache auf der Seite
function renderLanguage(lang) {
  // Alle Keys im aktuellen Sprach-Objekt durchgehen
  Object.keys(translations[lang]).forEach(key => {
    // 1️⃣ Zuerst: ID suchen
    const idEl = document.getElementById(key);
    if (idEl) {
      idEl.innerHTML = translations[lang][key];
    }

    // 2️⃣ Dann: Klasse suchen (falls mehrfach benötigt)
    const classEls = document.querySelectorAll(`.${key}`);
    classEls.forEach(el => {
      el.innerHTML = translations[lang][key];
    });
  });
}

// Funktion zum Wechseln der Sprache
function toggleLanguage() {
  // Sprache wechseln
  currentLanguage = currentLanguage === 'de' ? 'pl' : 'de';
  
  // Übersetzungen anwenden
  renderLanguage(currentLanguage);
}

// Beim Laden der Seite die Standardsprache setzen
window.onload = () => renderLanguage(currentLanguage);
