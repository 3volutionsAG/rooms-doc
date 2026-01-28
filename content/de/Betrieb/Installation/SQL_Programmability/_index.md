---
title: "SQL Programmability"
linkTitle: "SQL Programmability"
weight: 30
description: 'Ausführungsberechtigungen für Nicht-DB-Owner setzen.'
---
<p align = "justify">
Dadurch, dass der Service User üblicherweise nicht auch "DB Owner" ist. Ist es unter Umständen nötig Ausführungsberechtigungen zu setzten. </p>

## Stored Procedures

- dbo.P_DeletePerson
- dbo.P_GetAtkionMail
- dbo.P_Text_InsertMail

Beispielhafte Ausführung der Store Prosedures:

1. Navigieren sie zu den **Stored Procedures** in der gewünschten Datenbank.
2. Rechtsklick auf die entsprechende **Procedures**, **Properties** auswählen.
   
   {{< imgproc Procedures-Properties Resize "640x" >}} {{< /imgproc >}}

3. Fügen sie den ROOMS ServiceUser via **Permissions** hinzu.
   
   {{< imgproc Permissions Resize "640x" >}} {{< /imgproc >}}

4. Erlauben sie **Execute** Rechte für diesen User.
   
   {{< imgproc Execute Resize "640x" >}} {{< /imgproc >}}
   
5. Wiederholen sie die obigen Schritte mit den restlichen **Stored Procedures** (dbo.P_GetAktionMail / dbo.P_Text_InsertUpdate)