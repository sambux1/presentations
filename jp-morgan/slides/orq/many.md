# Supporting Many-to-Many Joins

<br>

<v-clicks>

We can transform a many-to-many join into a one-to-many join.

*Pre-aggregate* one of the tables and mark duplicate keys as invalid.

<img class="absolute right-12 top-24" style="width: 30%" src="../../figures/concat-table.png">

</v-clicks>

<v-clicks>

- The aggregation must be decomposable
- All keys must exist in one of the tables

</v-clicks>

<v-clicks>

These constraints hold for all 31 queries from prior work.

</v-clicks>

<SlideCurrentNo class="absolute bottom-8 right-10"/>