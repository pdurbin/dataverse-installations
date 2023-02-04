cat data/data.json | jq -r '.installations[] | [.launch_year, .country, .continent] | @tsv' | sort | uniq -c | cut -c4- | sed 's/ /\t/' | awk -F "\t" '{print $2"-01-01,"$3","$4","$1}'
