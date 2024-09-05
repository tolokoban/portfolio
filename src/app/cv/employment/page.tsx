import React from "react"

import { useLangValue } from "@/hooks/lang"

export default function PageEmployment() {
    const lang = useLangValue()
    const tr = TRANSLATIONS[lang] ?? EN
    return (
        <>
            <h2>{tr.employment}</h2>
            <>
                <p>
                    <b>July 2019 – now</b>: Blue Brain Project (EPFL) [
                    <a href="https://www.epfl.ch/research/domains/bluebrain/">
                        website
                    </a>
                    ]
                </p>
                <blockquote>
                    The Blue Brain Project aimed to simulate a full mouse brain
                    (80 million neurons).
                    <br />I worked in the Visualization Team to provide tools
                    that help scientists to validate their models visually.
                </blockquote>
                <ul>
                    <li>
                        <b>Circuit Studio</b> (
                        <a href="#/work/articles/CircuitStudio">link</a>):
                        Virtual microscope into the simulated mouse's brain
                    </li>
                    <li>
                        <b>Open Brain Platform</b> (
                        <a href="#/work/articles/BBOP">link</a>): the app that
                        summarize 18 years of the Blue Brain Project
                    </li>
                    <li>
                        <b>Hippocampus coordinates</b> (
                        <a href="#/work/articles/Hippocampus">link</a>): Visual
                        validation of a curved coordinates system
                    </li>
                </ul>
            </>
            <>
                <p>
                    <b>June 2006 – June 2019</b>: Lombard Odier Private Bank [
                    <a href="https://www.lombardodier.com">website</a>]
                </p>
                <blockquote></blockquote>
                <ul>
                    <li>
                        <b>NegoceIDL</b>: JAVA program parsing IDL files
                        provided by CORBA servers, and making VB6, C# and C++
                        code for clients.
                    </li>
                    <li>
                        <b>AntiRegressor</b>: Regression test software for CORBA
                        servers. It provides a “visual programming” interface
                        and can be used by testers with no coding skills.
                    </li>
                    <li>
                        <b>Generic Reports</b>: based on a rich XML language an
                        on XSLT templates , it produces HTML, Excel,
                        LibreOffice, XML and PDF files for financial reports. We
                        used a LaTeX standalone installation to build PDF
                        quickly (TexLive).
                    </li>
                    <li>
                        <b>SalesOrders & VNegoce</b>: two orders management
                        systems written in VB6, C# and C++.
                    </li>
                    <li>
                        <b>Fair allocation</b>: algorithm of fair trades
                        distribution. Prototyped in Python, implemented in C++
                        and VB6{" "}
                    </li>
                </ul>
            </>
            <>
                <p>
                    <b>Mai 2003 – May 2006</b>: SOLOG (Switzerland)
                </p>
                <ul>
                    <li>
                        <b>DB migration</b>: BNP Paribas gave me one week to
                        rewrite more than 500 SQL queries because of a deep
                        change in the DB schema. I wrote a lexer/scaner to do
                        this automatically. SQL, PERL.
                    </li>
                    <li>
                        <b>Market Orders Packaging</b>: pack compatible orders
                        in a single one to pay less fees. Mercator, SQL.{" "}
                    </li>
                </ul>
                <p>
                    <b>July 2002 – April 2003</b>: Reuters [
                    <a href="https://www.reuters.com/">website</a>]
                </p>
                <ul>
                    <li>
                        <b>PermLib</b>: Asynchronous C++ library delivering
                        quotes and permissions on RIC instruments. Tibco
                        RendezVous, RogueWave, STL.
                    </li>
                    <li>
                        <b>QuoteAnalyser</b>: software to test mathematical
                        models for quote variations previsions. Python 2, numpy.{" "}
                    </li>
                </ul>
                <p>
                    <b>July 2001 – June 2002</b>: SOLOG (Switzerland)
                </p>
                <ul>
                    <li>
                        <b>ITC/ONU</b> [http://jitap.org], Euronews and SITA in
                        Geneva to develop web sites. HTML, CSS, Javascript, PHP.{" "}
                    </li>
                </ul>
                <p>
                    <b>Sept 2000 – June 2001</b>: SOLOG (France)
                </p>
                <ul>
                    <li>
                        <b>SOLOG website</b>: coding and design. HTML, CSS,
                        Javascript, PHP.
                    </li>
                </ul>
            </>
            <>
                <p>
                    <b>Dec 1999 – Aug 2000</b>: ATOS Origin [
                    <a href="https://atos.net">website</a>]
                </p>
                <ul>
                    <li>
                        <b>E-Deploy</b>: (mandated to Hewlett Packard) Computers
                        purchase web site dedicated to big customers (British
                        Telecom, SNCF, …). HTML, CSS, Javascript.
                    </li>
                </ul>
            </>
            <>
                <p>
                    <b>July 1996 – Nov 1999</b>: INSERM [
                    <a href="https://inserm.fr">website</a>]
                </p>
            </>
            <hr />
            <a href="#/cv">{tr.back}</a>
        </>
    )
}

const FR = {
    employment: "Expérience professionnelle",
    back: "Retour au CV complet",
}

const EN: typeof FR = {
    employment: "Employment",
    back: "Back to full resume",
}

const TRANSLATIONS: Record<string, typeof FR> = {
    fr: FR,
    en: EN,
}
