(() => {

    const collectData = async url => {
        return fetch(url).then(data => data.json())
    }

    const generateHTML = photos => {
        const first100Photos = photos
            .slice(0, 100)
            .map(photo => {
                const { albumId, id, title, thumbnailUrl } = photo
                return `
                    <tr>
                        <td>${albumId}</td>
                        <td>${id}</td>
                        <td>${title}</td>
                        <td><img src="${thumbnailUrl}"></td>
                    </tr>
                `
            })
            .join('')
        return first100Photos;
    }

    const generateStatsHTML = photos => {
        const stats = photos
            // .slice(0, 100)
            .reduce((cumulative, current) => {
                const albumId = current.albumId;
                const existingAlbum = cumulative.find(photo => photo.albumId === albumId);
                if (!existingAlbum) {
                    cumulative.push({
                        albumId,
                        photos: 1
                    })} else {
                        existingAlbum.photos += 1;
                    }
                return cumulative;
            }, [])
            .map(photo => {
                const {albumId, photos} = photo
                return  `
                        <tr>
                            <td>${albumId}</td>
                            <td>${photos}</td>
                        </tr>
                        `
            })
            .join('')
        return stats
    }

    

    const renderHTML = newHTML => {
        document.getElementById('dataTable').innerHTML = newHTML;
    }

    const renderStatsHTML = stats => {
        document.getElementById('photosStats').innerHTML = stats;
    }

    document.getElementById('displayPhotos').addEventListener('click', async () => {
        try {
            const data = await collectData('https://jsonplaceholder.typicode.com/photos');

            const newHTML = generateHTML(data)
            const newStats = generateStatsHTML(data)

            renderHTML(newHTML)
            renderStatsHTML(newStats)
        } catch (error) {
            console.warn(error)
        }



    })

})()