export function infoLayouts(items = []) {

    const layouts = Object.keys(items.layouts)
    const res = []
    layouts.forEach(layout => {

        switch (layout) {
            case 'spa_zone':
                res.push('СПА-зона')
                break
            case 'office':
                res.push('Кабинет')
                break
            case 'technical_room':
                res.push('Техническое помещение')
                break
            case 'kitchen':
                res.push('Кухня')
                break
            case 'utility_room':
                res.push('Хозяйственное помещение')
                break
            case 'living_room':
                res.push('Гостиная')
                break
            case 'dressing_room':
                res.push('Гардеробные')
                break
            case 'dining_room':
                res.push('Столовая')
                break
            case 'game_room':
                res.push('Игровая')
                break
            case 'storage':
                res.push('Кладовые')
                break
            case 'winter_garden':
                res.push('Зимний сад')
                break
            case 'staff_room':
                res.push('Комната персонала')
                break
            case 'wine_room':
                res.push('Винная комната')
                break
            case 'loft':
                res.push('Лифт')
                break
            case 'movie_theater':
                res.push('Кинотеатр')
                break
            case 'gym':
                res.push('Спортзал')
                break
            case 'childrens_room':
                res.push('Детская комната')
                break
            case 'working_kitchen':
                res.push('Рабочая кухня')
                break
            default:
                res.push('')
                break
        }

    }, [])

    return res


}