import React, { useMemo } from "react";
import { Molecule } from 'openchemlib/minimal';

export interface Props {
    molfile: string,
    size: number
}
const MolFileSGROUPPattern = () => {
    return /\WM\s+V30 BEGIN SGROUP(.|\W)+?M\s+V30 END SGROUP/gm;
}

export const OclRenderer = (
    {
        molfile, size
    }: Props): JSX.Element => {

    if (!molfile) {
        return <div />;
    }

    const regexpSGROUP = MolFileSGROUPPattern();
    const mol = molfile.replace(regexpSGROUP, '');

    if (mol) {

        const molecule = Molecule.fromMolfile(mol);
        let svg = "";
        try {
            svg = molecule.toSVG(size, size);

        } catch (e) {
            console.log(e);
        }

        svg = svg.replace(/(?<=<svg .*)( width="\d+px" )/, ' ')
            .replace(
                /(?<=<svg .*)( height="\d+px" )/,
                ' style="width: 100%; height: 100%;" '
            );
        svg = svg.replace(
            /<text x="[\d\.]+" y="[\d\.]+" font-family=" Helvetica" font-size="[\d\.]+" fill="rgb\(160,0,0\)">[\w\s]{0,3}<\/text>/g, ''
        );

        return <div style={{ width: `${size}px` }} dangerouslySetInnerHTML={{ __html: svg }} />;
    }
    return <div />;
}


export const OclViewer = (
    {
        molfile, size
    }: Props): JSX.Element => {

    return useMemo(() => <OclRenderer molfile={molfile} size={size} />, [molfile, size]);
};
