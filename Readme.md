# Vorlage für MME-Projekte

Dieses Repository bildet die Grundlage für Ihre Projektarbeit und wurde über die Annahme der _Classroom_-Aufgabe automatisch erstellt. Hinweise zum Aufbau der vorgegebenen Struktur und Hilfswerkzeuge finden Sie im [Dev Guide](./DevGuide.md). **Achten Sie während der Entwicklung stets darauf, dass der Code in Ihrem Repository zu jeder Zeit über `npm run build` fehlerfrei gebaut und veröffentlicht werden kann.**

**Ergänzen Sie im Laufe der Entwicklung die folgenden Punkte in dieser Readme-Datei!**

## Projekt

_Fassen Sie kurz die wichtigsten Features, die intendierte Zielgruppe und die grundlegende Motivation des Projekts zusammen. Nennen Sie die aktuell bereits implementierten Funktionen und verlinken Sie den aktuellsten Release._

Pastina ist ein gemeinnütziger Verin, der mit Maßnahmen und Dienstleistungen traumatisierte Kinder, Jugendliche und Erwachsene unterstützen möchte. Veranstaltungen, Workshops und  Kurse zur nachhaltigen Landwirtschaft sollen zur Verbesserung der Umweltbedingungen und zur umsichtigen und vernünftigen Nutzung der natürlichen Ressourcen beitragen. Der Standort des Vereins ist in der Toskana in Italien und beläuft sich auf einen Hof mit Schlaf- und Aufenthaltsräumen inklusive landwirtschaftlich genutztem Grund. Die Website wird benötigt um schneller und einfacher neue Mitglieder zu gewinnen und finanzielle Unterstützung durch Spenden zu bekommen. Außerdem sollen sich Mitglieder über aktuelle Events informieren und anmelden können. Hierbei stellt die Zielgruppe Menschen dar, die Interesse haben, hilfesuchende Familien zu unterstützen und/oder sich nachhaltig mit der Umwelt zu beschäftigen.

## Beschreibung & Anleitung

_Beschreiben Sie die zentralen Funktionen Ihrer Anwendung und deren Verwendung. Nutzen Sie dazu Screenshots und/oder Videos. Verlinken Sie ein min. 60-sekündiges Demo-Video, das die Verwendung aller wichtigen Funktionen zeigt und in Form eines Audio-Kommentars beschreibt._

**1.MitgliederPage:**
Hier hat der Nutzer die Möglichkeit in nur 2 Schritten Mitglied zuwerden. Diese Seite ist mit einer Datenbank (Firebase) verbunden. So werden die ausgefüllten Felder nicht verloren gegangen :) .
![image](https://user-images.githubusercontent.com/86771721/193351776-ebb6a749-d15f-4dde-913e-7fb67f62e964.png)


**1. Spenden-Page:**
Hier kann der Nutzer Erfahrungsberichte von Mitgliedern in Pastina lesen und hat die Möglichkeit, den Verein durch eine Spende zu unterstützen.



In drei Schritten kann der Nutzer das Spendenformular ausfüllen. Nachdem Betrag und Frequenz der Spende angegeben wurden, werden die persönlichen Daten abgefragt, bevor zuletzt die Zahlungsarten angegeben werden können. Der Nutzer bekommt im Anschluss eine E-Mail als Bestätigung für die Spende.
![image](https://user-images.githubusercontent.com/86771721/193350958-7532746b-a1a3-4ddf-b481-20a9f9e49438.png)

![image](https://user-images.githubusercontent.com/86771721/193350911-2280b242-c899-4bc1-b244-f4b9ae4646ae.png)



Außerdem ist ein Spendenbalken zu sehen, der den bereits gespendeten Betrag und das Spendenziel anzeigt.

![image](https://user-images.githubusercontent.com/86771721/193351058-cd78ae89-dec8-42a2-870f-fa483f9df869.png)


**2. Event-Page:**
Auf der Event-Page sollen aktuelle Kurse und Veranstaltungen in Pastina in einer Liste dargestellt werden. Diese Liste ist mit einer Datenbank (Firebase) verbunden, um Termine zu aktualisieren oder hinzuzufügen. 

(Bild)

**3. Map-Page:**
Auf der Map-Page wird mithilfe eines Leaflet PlugIns der Grundriss von Pastina und eine Karte der Umgebung angezeigt. Auf dem Grundriss befinden sich Marker, die mit einer Bildergalerie verbunden sind. Mit Klick auf die Marker gewinnt der Nutzer einen Einblick in die Verteilung der Räumlichkeiten und Außenbereiche. Auf der Karte der Umgebung werden dem Nutzer Sehenswürdigkeiten im näheren Umkreis Pastinas angezeigt.

![image](https://user-images.githubusercontent.com/86771721/193351127-0a42906b-21e7-4006-83ee-7ddc374c2bf9.png)

![image](https://user-images.githubusercontent.com/86771721/193351162-02f80a7b-a116-4b37-9e9c-8b759280b722.png)

![image](https://user-images.githubusercontent.com/86771721/193351182-111a92e4-773b-4bcd-ae3c-f0a9bc22475e.png)



(Video)


## Team

_Listen Sie tabelarisch alle Teammitglieder mit Name, E-Mail-Adresse und Foto auf. Halten Sie für jedes Mitglied kurz fest, welchen Teilbereich der Anwendung die jeweilige Person maßgeblich bearbeitet hat._


| Samuel Huber | Kristina Neumüller| Dena Mehr |
| --------------|:--------------:| -------------------:|
| samuel.huber@stud.uni-regensburg.de| kristina.neumueller@stud.uni-regensburg.de| dena.mehr@stud.uni-regensburg.de |
|![IMG_3815](https://user-images.githubusercontent.com/86771852/193330048-5a30bd99-e06d-40b7-9b5c-818169f629fc.jpg)|![IMG_3814](https://user-images.githubusercontent.com/86771852/193330094-d30c2d7d-3da6-4330-83a3-beaad74e503a.jpg)|![IMG_3812 2](https://user-images.githubusercontent.com/86771852/193330128-d1da59f9-cd11-4c22-9732-06d62eb5baf0.jpg)
| Maps & Event | Event & Design | Spenden & Design |
