WITH rec AS (
   SELECT 
	 s.name AS sub_name,
	 s.id AS sub_id,
	 2 AS sub_level
   FROM subdivisions s
   join collaborators c on c.subdivision_id = s.parent_id
   WHERE c.id = 710253
union all
SELECT 
	 s.name AS sub_name,
	 s.id AS sub_id,
	 sub_level+1 AS sub_level
FROM rec e
JOIN subdivisions s
ON s.parent_id = e.sub_id
)
select c.id, 
	   c.name,
	   r.sub_name,
	   r.sub_id,
	   r.sub_level,
	   ca.colls_count
from rec r
join collaborators c on c.subdivision_id = r.sub_id
cross apply (select count(*) as colls_count from collaborators c1 where c1.subdivision_id = c.subdivision_id) ca
where r.sub_id not in (100055, 100059)
and c.age < 40
order by sub_level, sub_name
