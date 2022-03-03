import { Marker, Popup } from 'react-leaflet';
import { Button, Stack, Link, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import L from 'leaflet'
import sanitizeHtml from 'sanitize-html';
import { ReactComponent as Localization } from './img/icons/loc.svg'

const ButtonLink = styled(Button)({
    color: '#ffffff !important'
})

const DesContainer = styled(Box)({
    maxHeight: '25em',
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
        width: '8px'
    },
    '&::-webkit-scrollbar-track': {
        background: '#f1f1f1'
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#c5c4c4'
    },

    '&::-webkit-scrollbar-thumb:hover': {
        background: '#555'
    },
    '.fa': {
        display: 'block'
    }

})

const htmlSanitazeConfig = {
    allowedTags: ['b', 'i', 'em', 'strong', 'a', 'span'],
    allowedAttributes: {
        'a': ['href']
    },
    allowedClasses: {
        span: [/^fa-([a-zA-Z]|-)+/, 'fa']
    }
}

const MarkerComponent = ({ coords, index, title, phone, desc }) => {
    const [lng, lat] = coords
    const getGoogleLink = `https://www.google.com/maps/dir/?api=1&destination=${lat}%2C${lng}`
    const getOSMLink = `https://www.openstreetmap.org/directions?from=&to=${lng}%2C${lat}#map=14/${lng}/${lat}`
    const sanitazedDesc = sanitizeHtml(desc, htmlSanitazeConfig);

    return <Marker
        key={index}
        position={L.latLng({ lat, lng })}
    >
        <Popup>
            <h2>{title}</h2>
            <Stack direction="column" spacing={2}>
                <ButtonLink variant="contained" target="_blank" href={getGoogleLink} startIcon={<Localization />}>
                    OpenStreetMap
                </ButtonLink>
                <ButtonLink variant="contained" target="_blank" href={getOSMLink} startIcon={<Localization />}>
                    Google Maps
                </ButtonLink>
            </Stack>
            {phone && <p>Phone nr: <Link href={`tel:${phone}`} underline='none'>{phone}</Link ></p>}
            <DesContainer dangerouslySetInnerHTML={{
                __html: sanitazedDesc
            }} />
        </Popup>
    </Marker>
}

export default MarkerComponent