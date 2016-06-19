```
 ePerson.status : bitmask

========================================================================
 v.1
    0000 0000 0000 0000
    |||| |||| |||| ||||
    |||| |||| |||| |||\- NPemp Employee
    |||| |||| |||| ||\-- NPpeg Priv entrepr general
    |||| |||| |||| |\--- NPpeu Priv entrepr uniform tax
    |||| |||| |||| \---- NPflx Free-lancer (notary, lawyer etc)
    |||| |||| ||||
    |||| |||| |||\------ RLDEC
    |||| |||| ||\------- RLREP
    |||| |||| |\-------- NPres1 (reserved)
    |||| |||| \--------- NPres0 (reserved)
    |||| ||||
    |||| |||\----------- LEcgn Commercial general
    |||| ||\------------ LEcu0 Commercial unitax #0
    |||| |\------------- LEcu1 Commercial unitax #1
    |||| \-------------- LEcu2 Commercial unitax #2
    ||||
    |||\---------------- LEgvt Government - Tax authority
    ||\----------------- LEgvx Government - other
    |\------------------ LEngo Non-governmental organization
    \------------------- LEres0 (reserved)

NP = NATPERS = 0000 0000 1111 1111 - natural person
LP = LEGENTY = 1111 1111 0000 0000 - legal entity


========================================================================
v.2 NOT APPROVED
    0000 0000 0000 0000
    |||| |||| |||| ||||
    |||| |||| |||| |||\- LSNATP Natural Person
    |||| |||| |||| ||\-- LSCORP Commercial
    |||| |||| |||| |\--- LSNGOR Non-governmental organization
    |||| |||| |||| \---- LSGVTH Governmental authority
    |||| |||| ||||
    |||| |||| |||\------ TSGEN
    |||| |||| ||\------- TSUNI0
    |||| |||| |\-------- TSUNI1
    |||| |||| \--------- TSUNI2
    |||| ||||
    |||| |||\-----------
    |||| ||\------------
    |||| |\-------------
    |||| \--------------
    ||||
    |||\----------------
    ||\-----------------
    |\------------------
    \------------------- RSRES

LS = Legal Status
TS = Tax Status
RS = Residential Status

```