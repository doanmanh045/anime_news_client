import * as urlSlug from 'url-slug'

export const convertUrlSlug = (value) => {
    const url = urlSlug.convert(value, {
        separator: '-',
        transformer: urlSlug.LOWERCASE_TRANSFORMER
    })
    return url
}

