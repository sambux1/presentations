# The ORQ System

<br>

<v-clicks depth="2">

- Familiar API
- Protocol-agnostic interface
    - Support for 2PC, 3PC, 4PC
- Data-parallel runtime
- Custom TCP Communicator

</v-clicks>

<img class="absolute right-12 top-54" style="width: 60%" src="../../figures/orq-stack.png" v-click="6">

<div class="absolute right-12 top-30" style="width: 50%" v-click="[1, 6]">

```cpp {theme=dark}
auto C = db.getCustomersTable();
auto O = db.getOrdersTable();

O.filter(O["[Comment]"] != 0);

auto T = C.left_outer_join(O,
    {"[CustKey]"},
    {{"Count", "Count", count}});

T.convert_a2b("Count", “[Count]");

auto F = T.aggregate(
    {"[Count]"},
    {{"CustDist", "CustDist", count}});

F.convert_a2b("CustDist", "[CustDist]");
F.sort({"[CustDist]", "[Count]"}, DESC);
```

</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
So far I've skipped over most of the systems work that went into all of this, but ultimately we spent a lot of effort building the system so that people could actually use it, so I'll take my last couple minutes to talk about the system itself.

We designed the system to have a familiar API. The system is written in C++, which might not be the most approachable language, but we've taken a lot of time to try to make the API similar to a lot of other data systems.

We have a protocol agnostic interface. This means that you can write MPC programs without worrying about the underlying secret sharing scheme or number of parties. For example, you can simply call the multiplication function, and the system will automatically execute it with the correct protocol to match the system and threat model specified.

Thus far, we have support for two, three, and four parties, but we're actively working on extending this to a few more settings.

We have a data parallel runtime which automatically parallelizes fundamental operations as we add more threads.

And finally, we designed a custom TCP communicator to work well in the MPC setting to maximize throughput and take full advantage of the available bandwidth. This is particularly important in the wide area network setting.

Here's a system diagram showing the different system components and their interactions. At the bottom layers, we have the actual hardware and the runtime that maps MPC operations onto the available threads.

One layer up, we implement a variety of foundational building blocks for each of the supported protocols and thread models. For each protocol we want to support, we have to specify some base set of operations, like addition, multiplication, etcetera.

And then towards the top of the stack, we have compound operators that make black box use of the underlying base operators. These upper layers are completely agnostic to the details of the secure computation.
-->