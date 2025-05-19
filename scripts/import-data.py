import csv
import json
import os

dir = os.path.dirname(__file__)
file_in_path = f'{dir}/bob_ross_paintings.csv'
file_out_path = f'{dir}/../src/data/paintings.json'

color_whitelist = ['alizarin_crimson', 'bright_red', 'cadmium_yellow', 'phthalo_green', 'prussian_blue', 'sap_green', 'titanium_white', 'van_dyke_brown', 'burnt_umber', 'indian_yellow', 'phthalo_blue', 'yellow_ochre', 'midnight_black', 'dark_sienna']

def read_csv_to_dicts(file_path):
    with open(file_path, mode='r', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        return [row for row in reader]

def read_list(painting, prop):
    list = json.loads(painting[prop].replace("'", '"'))
    return [text.replace(" ", '_').lower() for text in list]

def convert(painting):
    colors = read_list(painting, 'colors')
    tags = read_list(painting, 'tags')

    return {
        "index": int(painting['painting_index']),
        "title": painting['painting_title'],
        "season": int(painting['season']),
        "episode": int(painting['episode']),
        "youtubeUrl": painting['youtube_src'].replace('www.youtube.com/embed/', 'www.youtube.com/watch?v='),
        "colors": [color for color in colors if color in color_whitelist],
        "contactPaper": "contact_paper" in tags,
        "underpainting": "underpainting" in tags,
        "mountains": "mountains" in tags,
        "buildings": any(tag in ['cabin', 'barn'] for tag in tags),
    }

paintings = read_csv_to_dicts(file_in_path)
paintings_json = json.dumps([convert(painting) for painting in paintings], indent=2)

with open(file_out_path, 'w') as jsonfile:
    jsonfile.write(paintings_json)