# Vorlage für MME-Projekte

Dieses Repository bildet die Grundlage für Ihre Projektarbeit und wurde über die Annahme der _Classroom_-Aufgabe automatisch erstellt. Hinweise zum Aufbau der vorgegebenen Struktur und Hilfswerkzeuge finden Sie im [Dev Guide](./DevGuide.md). **Achten Sie während der Entwicklung stets darauf, dass der Code in Ihrem Repository zu jeder Zeit über `npm run build` fehlerfrei gebaut und veröffentlicht werden kann.**

**Ergänzen Sie im Laufe der Entwicklung die folgenden Punkte in dieser Readme-Datei!**

## Projekt

_Fassen Sie kurz die wichtigsten Features, die intendierte Zielgruppe und die grundlegende Motivation des Projekts zusammen. Nennen Sie die aktuell bereits implementierten Funktionen und verlinken Sie den aktuellsten Release._

Pastina ist ein gemeinnütziger Verin, der mit Maßnahmen und Dienstleistungen traumatisierte Kinder, Jugendliche und Erwachsene unterstützen möchte. Veranstaltungen, Workshops und  Kurse zur nachhaltigen Landwirtschaft sollen zur Verbesserung der Umweltbedingungen und zur umsichtigen und vernünftigen Nutzung der natürlichen Ressourcen beitragen. Der Standort des Vereins ist in der Toskana in Italien und beläuft sich auf einen Hof mit Schlaf- und Aufenthaltsräumen inklusive landwirtschaftlich genutztem Grund. Die Website wird benötigt um schneller und einfacher neue Mitglieder zu gewinnen und finanzielle Unterstützung durch Spenden zu bekommen. Außerdem sollen sich Mitglieder über aktuelle Events informieren und anmelden können. Hierbei stellt die Zielgruppe Menschen dar, die Interesse haben, hilfesuchende Familien zu unterstützen und/oder sich nachhaltig mit der Umwelt zu beschäftigen.

## Beschreibung & Anleitung

_Beschreiben Sie die zentralen Funktionen Ihrer Anwendung und deren Verwendung. Nutzen Sie dazu Screenshots und/oder Videos. Verlinken Sie ein min. 60-sekündiges Demo-Video, das die Verwendung aller wichtigen Funktionen zeigt und in Form eines Audio-Kommentars beschreibt._

**1. Spenden-Page:**
Hier kann der Nutzer Erfahrungsberichte von Mitgliedern in Pastina lesen und hat die Möglichkeit, den Verein durch eine Spende zu unterstützen.

(Bild)

In drei Schritten kann der Nutzer das Spendenformular ausfüllen. Nachdem Betrag und Frequenz der Spende angegeben wurden, werden die persönlichen Daten abgefragt, bevor zuletzt die Zahlungsarten angegeben werden können. Der Nutzer bekommt im Anschluss eine E-Mail als Bestätigung für die Spende.

(3 Bilder)

Außerdem ist ein Spendenbalken zu sehen, der den bereits gespendeten Betrag und das Spendenziel anzeigt.

(Bild)

**2. Event-Page:**
Auf der Event-Page sollen aktuelle Kurse und Veranstaltungen in Pastina in einer Liste dargestellt werden. Diese Liste ist mit einer Datenbank (Firebase) verbunden, um Termine zu aktualisieren oder hinzuzufügen. Die Veranstaltungen werden dabei nach Datum sortiert. 

(Bild)

Durch den "Jetzt anfragen" Button öffnet sich ein Pop-up Fenster. Der Nutzer hat die Möglichkeit, sich vorzustellen und per E-Mail eine Anfrage zu verschicken.

(Bild)

**3. Map-Page:**
Auf der Map-Page wird mithilfe eines Leaflet PlugIns der Grundriss von Pastina und eine Karte der Umgebung angezeigt. Auf dem Grundriss befinden sich Marker, die mit einer Bildergalerie verbunden sind. Mit Klick auf die Marker gewinnt der Nutzer einen Einblick in die Verteilung der Räumlichkeiten und Außenbereiche. Auf der Karte der Umgebung werden dem Nutzer Sehenswürdigkeiten im näheren Umkreis Pastinas angezeigt.

(3 Bilder)


(Video)


## Team

_Listen Sie tabelarisch alle Teammitglieder mit Name, E-Mail-Adresse und Foto auf. Halten Sie für jedes Mitglied kurz fest, welchen Teilbereich der Anwendung die jeweilige Person maßgeblich bearbeitet hat._


| Samuel Huber | Kristina Neumüller| Dena Mehr |
| --------------|:--------------:| -------------------:|
| samuel.huber@stud.uni-regensburg.de| kristina.neumueller@stud.uni-regensburg.de| dena.mehr@stud.uni-regensburg.de |
| Foto      | Foto      |   Foto |
| Maps & Event| Event& Design     | Spenden, Design |
