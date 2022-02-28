function getLayersState(layers, lang) {
    const layersDefinitions = {};
    const layersVisibilityState = {};
    layers.forEach(layer => {
        const { group } = layer.metadata;
        const { visibility } = layer.layout;
        if(!layersDefinitions[group]) {
            layersVisibilityState[group] = visibility === 'visible';
        }
        if(layersDefinitions[group]) {
            layersDefinitions[group].layers.push(layer);
            return
        }
        layersDefinitions[group] = {
            layers: [layer],
            id: group,
            name: layer.metadata.name[lang],
        }
    });
    return {layersDefinitions, layersVisibilityState};
}

export const layersColoursDict = {
    background: '',
    helpPoints: '#ffd500',
    informationPoints: '#ffee00',
    bloodDonation: '#990000',
    socialFacilities: '#00d5ff',
    pharmacies: '#880044',
    hospitals: '#ff1111',
    diplomatic: '#446688',
    charityDropOff: '#11ee11',
}

export const getLayers = (lang) => {
    const {layersDefinitions, layersVisibilityState} = getLayersState(layers.layers, lang);
    return Object.keys(layersDefinitions).map(id => layersDefinitions[id]);
}

